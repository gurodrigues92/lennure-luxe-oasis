import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    // Verify user is authenticated
    const {
      data: { user },
      error: userError,
    } = await supabaseClient.auth.getUser()

    if (userError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const url = new URL(req.url)
    const path = url.pathname

    // GET /content - Get all site content
    if (req.method === 'GET' && path.includes('/content')) {
      console.log('Fetching all site content')
      
      const { data: content, error } = await supabaseClient
        .from('site_content')
        .select('*')
        .order('section', { ascending: true })

      if (error) {
        console.error('Error fetching content:', error)
        throw error
      }

      // Organize content by section and language
      const organized: Record<string, any> = {}
      content?.forEach((item) => {
        if (!organized[item.section]) {
          organized[item.section] = {}
        }
        const key = item.language === 'pt' ? item.field_key : `${item.field_key}_${item.language}`
        organized[item.section][key] = item.field_value
      })

      return new Response(JSON.stringify(organized), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // POST /content/update - Update specific field
    if (req.method === 'POST' && path.includes('/content/update')) {
      console.log('Updating site content')

      // Verify admin role
      const { data: isAdmin } = await supabaseClient.rpc('is_admin', {
        _user_id: user.id,
      })

      if (!isAdmin) {
        return new Response(JSON.stringify({ error: 'Forbidden: Admin access required' }), {
          status: 403,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      const { section, field_key, field_value, language = 'pt', field_type = 'text' } = await req.json()

      if (!section || !field_key) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      // Get admin record
      const { data: adminData } = await supabaseClient
        .from('admins')
        .select('id')
        .eq('user_id', user.id)
        .single()

      // Get old value for history
      const { data: oldContent } = await supabaseClient
        .from('site_content')
        .select('id, field_value')
        .eq('section', section)
        .eq('field_key', field_key)
        .eq('language', language)
        .maybeSingle()

      // Upsert content
      const { data: updated, error } = await supabaseClient
        .from('site_content')
        .upsert(
          {
            section,
            field_key,
            field_value,
            field_type,
            language,
            updated_by: adminData?.id,
          },
          {
            onConflict: 'section,field_key,language',
          }
        )
        .select()
        .single()

      if (error) {
        console.error('Error updating content:', error)
        throw error
      }

      // Save to history
      if (oldContent) {
        await supabaseClient.from('content_history').insert({
          content_id: oldContent.id,
          section,
          field_key,
          old_value: oldContent.field_value,
          new_value: field_value,
          changed_by: adminData?.id,
        })
      }

      console.log('Content updated successfully:', updated)

      return new Response(
        JSON.stringify({ success: true, updated_at: updated.updated_at }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // GET /content/history - Get change history
    if (req.method === 'GET' && path.includes('/content/history')) {
      console.log('Fetching content history')

      // Verify admin role
      const { data: isAdmin } = await supabaseClient.rpc('is_admin', {
        _user_id: user.id,
      })

      if (!isAdmin) {
        return new Response(JSON.stringify({ error: 'Forbidden' }), {
          status: 403,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      const { data: history, error } = await supabaseClient
        .from('content_history')
        .select(`
          *,
          changed_by_admin:admins!changed_by(name, user_id)
        `)
        .order('changed_at', { ascending: false })
        .limit(50)

      if (error) {
        console.error('Error fetching history:', error)
        throw error
      }

      return new Response(JSON.stringify(history), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
