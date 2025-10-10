import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-gold/20">
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Site</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-cormorant text-5xl md:text-6xl text-charcoal mb-4">
              Política de Privacidade
            </h1>
            <p className="text-charcoal/60 text-sm">
              Última atualização: {new Date().toLocaleDateString('pt-PT')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
            
            {/* Introdução */}
            <div>
              <p className="text-charcoal/80 leading-relaxed">
                A Lennure Lux Spa está comprometida com a proteção da sua privacidade e dos seus dados pessoais, 
                em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e demais legislação 
                aplicável em Portugal e na União Europeia.
              </p>
            </div>

            {/* 1. Identificação */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">1. Identificação da Entidade Responsável</h2>
              <div className="space-y-2 text-charcoal/80">
                <p><strong>Entidade:</strong> Lennure Lux Spa</p>
                <p><strong>NIF:</strong> [A completar com NIF real]</p>
                <p><strong>Morada:</strong> [A completar com morada real]</p>
                <p><strong>Email:</strong> [A completar com email real]</p>
                <p><strong>Telefone:</strong> [A completar com telefone real]</p>
              </div>
            </div>

            {/* 2. Dados Recolhidos */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">2. Dados Pessoais Recolhidos</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Para prestar os nossos serviços, podemos recolher e tratar as seguintes categorias de dados:
              </p>
              <ul className="space-y-2 text-charcoal/80 list-disc list-inside">
                <li>Dados de identificação (nome, data de nascimento)</li>
                <li>Dados de contacto (email, telefone, morada)</li>
                <li>Dados de marcação e histórico de serviços</li>
                <li>Dados de pagamento (processados por terceiros seguros)</li>
                <li>Dados de navegação (cookies, endereço IP)</li>
                <li>Informações de saúde relevantes para a prestação de serviços (apenas se fornecidas voluntariamente)</li>
              </ul>
            </div>

            {/* 3. Finalidades */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">3. Finalidades do Tratamento</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Os seus dados pessoais são tratados para as seguintes finalidades:
              </p>
              <ul className="space-y-2 text-charcoal/80 list-disc list-inside">
                <li>Gestão de marcações e prestação de serviços</li>
                <li>Processamento de pagamentos</li>
                <li>Comunicação com clientes (confirmações, lembretes)</li>
                <li>Marketing direto (apenas com consentimento prévio)</li>
                <li>Cumprimento de obrigações legais</li>
                <li>Melhoria da qualidade dos serviços</li>
                <li>Gestão de reclamações</li>
              </ul>
            </div>

            {/* 4. Base Legal */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">4. Base Legal</h2>
              <p className="text-charcoal/80 leading-relaxed">
                O tratamento dos seus dados baseia-se em:
              </p>
              <ul className="space-y-2 text-charcoal/80 list-disc list-inside mt-4">
                <li><strong>Execução de contrato:</strong> Necessário para prestar os serviços solicitados</li>
                <li><strong>Consentimento:</strong> Para marketing e comunicações promocionais</li>
                <li><strong>Interesse legítimo:</strong> Melhoria de serviços e segurança</li>
                <li><strong>Obrigação legal:</strong> Cumprimento de requisitos fiscais e contabilísticos</li>
              </ul>
            </div>

            {/* 5. Partilha de Dados */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">5. Partilha com Terceiros</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Os seus dados podem ser partilhados com:
              </p>
              <ul className="space-y-2 text-charcoal/80 list-disc list-inside">
                <li>Processadores de pagamento (para transações seguras)</li>
                <li>Serviços de cloud e hosting</li>
                <li>Ferramentas de análise (Google Analytics)</li>
                <li>Autoridades legais (quando exigido por lei)</li>
              </ul>
              <p className="text-charcoal/80 leading-relaxed mt-4">
                Todos os terceiros são cuidadosamente selecionados e obrigados contratualmente a proteger os seus dados.
              </p>
            </div>

            {/* 6. Direitos do Titular */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">6. Os Seus Direitos</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Nos termos do RGPD, tem os seguintes direitos:
              </p>
              <ul className="space-y-2 text-charcoal/80 list-disc list-inside">
                <li><strong>Direito de acesso:</strong> Saber que dados tratamos sobre si</li>
                <li><strong>Direito de retificação:</strong> Corrigir dados incorretos</li>
                <li><strong>Direito ao apagamento:</strong> Solicitar a eliminação dos seus dados</li>
                <li><strong>Direito à portabilidade:</strong> Receber os seus dados em formato estruturado</li>
                <li><strong>Direito de oposição:</strong> Opor-se ao tratamento (incluindo marketing)</li>
                <li><strong>Direito à limitação:</strong> Restringir o tratamento em certas circunstâncias</li>
                <li><strong>Direito de reclamação:</strong> Apresentar queixa à CNPD</li>
              </ul>
              <p className="text-charcoal/80 leading-relaxed mt-4">
                Para exercer os seus direitos, contacte-nos através de [email de contacto].
              </p>
            </div>

            {/* 7. Conservação */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">7. Prazo de Conservação</h2>
              <p className="text-charcoal/80 leading-relaxed">
                Os dados pessoais são conservados apenas pelo período necessário às finalidades para as quais foram 
                recolhidos, ou conforme exigido por lei (por exemplo, dados fiscais durante 10 anos). Dados de 
                marketing são conservados até revogação do consentimento.
              </p>
            </div>

            {/* 8. Cookies */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">8. Cookies e Tecnologias de Rastreamento</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Utilizamos cookies para melhorar a sua experiência de navegação. Tipos de cookies utilizados:
              </p>
              <ul className="space-y-2 text-charcoal/80 list-disc list-inside">
                <li><strong>Essenciais:</strong> Necessários para o funcionamento do site</li>
                <li><strong>Analíticos:</strong> Google Analytics para estatísticas de uso</li>
                <li><strong>Marketing:</strong> Apenas com o seu consentimento</li>
              </ul>
              <p className="text-charcoal/80 leading-relaxed mt-4">
                Pode gerir as suas preferências de cookies nas definições do seu navegador.
              </p>
            </div>

            {/* 9. Segurança */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">9. Segurança dos Dados</h2>
              <p className="text-charcoal/80 leading-relaxed">
                Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra acesso 
                não autorizado, perda, destruição ou alteração, incluindo encriptação, firewalls e controlo de acesso restrito.
              </p>
            </div>

            {/* 10. Transferências */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">10. Transferências Internacionais</h2>
              <p className="text-charcoal/80 leading-relaxed">
                Os seus dados são processados principalmente dentro da União Europeia. Qualquer transferência para 
                países terceiros será realizada com as garantias adequadas (cláusulas contratuais-tipo da Comissão Europeia).
              </p>
            </div>

            {/* 11. CNPD */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">11. Direito de Reclamação</h2>
              <p className="text-charcoal/80 leading-relaxed">
                Se considerar que os seus direitos foram violados, pode apresentar reclamação junto da Comissão 
                Nacional de Proteção de Dados (CNPD):
              </p>
              <div className="mt-4 p-4 bg-cream rounded-lg text-charcoal/80">
                <p><strong>CNPD – Comissão Nacional de Proteção de Dados</strong></p>
                <p>Av. D. Carlos I, 134, 1º</p>
                <p>1200-651 Lisboa</p>
                <p>Tel: (+351) 213 928 400</p>
                <p>Email: geral@cnpd.pt</p>
                <p>Website: www.cnpd.pt</p>
              </div>
            </div>

            {/* 12. Alterações */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">12. Alterações à Política</h2>
              <p className="text-charcoal/80 leading-relaxed">
                Reservamo-nos o direito de atualizar esta política periodicamente. A data de última atualização 
                encontra-se no topo desta página. Alterações significativas serão comunicadas aos clientes.
              </p>
            </div>

            {/* 13. Contacto */}
            <div className="bg-gold/10 p-6 rounded-lg">
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">13. Contacto</h2>
              <p className="text-charcoal/80 leading-relaxed">
                Para questões sobre esta política ou exercício dos seus direitos, contacte-nos:
              </p>
              <div className="mt-4 space-y-1 text-charcoal/80">
                <p><strong>Email:</strong> [email de contacto]</p>
                <p><strong>Telefone:</strong> [telefone de contacto]</p>
                <p><strong>Morada:</strong> [morada completa]</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;