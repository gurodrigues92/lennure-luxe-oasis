import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Phone, Mail, Calendar, AlertCircle, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

const CancellationPolicy = () => {
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
              Política de Cancelamento
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
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introdução */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-charcoal/80 leading-relaxed">
                Na Lennure Lux Spa, valorizamos o seu tempo e o nosso compromisso mútuo. Esta política define 
                as condições de cancelamento e reagendamento para garantir uma experiência justa para todos os clientes.
              </p>
            </div>

            {/* Tabela de Prazos */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="font-cormorant text-3xl text-charcoal mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-gold" />
                Prazos de Cancelamento
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gold/10">
                      <th className="border border-gold/20 p-4 text-left font-cormorant text-lg">Prazo de Cancelamento</th>
                      <th className="border border-gold/20 p-4 text-left font-cormorant text-lg">Penalização</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gold/20 p-4 text-charcoal/80">
                        <CheckCircle className="w-5 h-5 text-green-600 inline mr-2" />
                        Mais de 24 horas antes
                      </td>
                      <td className="border border-gold/20 p-4 text-charcoal/80 font-medium text-green-600">
                        Sem penalização
                      </td>
                    </tr>
                    <tr className="bg-cream/50">
                      <td className="border border-gold/20 p-4 text-charcoal/80">
                        <AlertCircle className="w-5 h-5 text-orange-500 inline mr-2" />
                        Entre 12-24 horas antes
                      </td>
                      <td className="border border-gold/20 p-4 text-charcoal/80 font-medium text-orange-600">
                        50% do valor do serviço
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gold/20 p-4 text-charcoal/80">
                        <AlertCircle className="w-5 h-5 text-red-600 inline mr-2" />
                        Menos de 12 horas antes
                      </td>
                      <td className="border border-gold/20 p-4 text-charcoal/80 font-medium text-red-600">
                        100% do valor do serviço
                      </td>
                    </tr>
                    <tr className="bg-cream/50">
                      <td className="border border-gold/20 p-4 text-charcoal/80">
                        <AlertCircle className="w-5 h-5 text-red-600 inline mr-2" />
                        No-show (falta sem aviso)
                      </td>
                      <td className="border border-gold/20 p-4 text-charcoal/80 font-medium text-red-600">
                        100% do valor do serviço
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Como Cancelar */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="font-cormorant text-3xl text-charcoal mb-6 flex items-center gap-3">
                <Phone className="w-8 h-8 text-gold" />
                Como Cancelar ou Reagendar
              </h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Para cancelar ou reagendar a sua marcação, contacte-nos através de qualquer um dos seguintes meios:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-cream/50 p-6 rounded-lg text-center">
                  <Phone className="w-10 h-10 text-gold mx-auto mb-3" />
                  <h3 className="font-cormorant text-xl text-charcoal mb-2">Telefone</h3>
                  <p className="text-charcoal/70 text-sm">[Número de telefone]</p>
                </div>
                
                <div className="bg-cream/50 p-6 rounded-lg text-center">
                  <Mail className="w-10 h-10 text-gold mx-auto mb-3" />
                  <h3 className="font-cormorant text-xl text-charcoal mb-2">Email</h3>
                  <p className="text-charcoal/70 text-sm">[Email de contacto]</p>
                </div>
                
                <div className="bg-cream/50 p-6 rounded-lg text-center">
                  <svg className="w-10 h-10 text-gold mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <h3 className="font-cormorant text-xl text-charcoal mb-2">WhatsApp</h3>
                  <p className="text-charcoal/70 text-sm">[Número WhatsApp]</p>
                </div>
              </div>

              <div className="mt-6 bg-gold/10 p-4 rounded-lg">
                <p className="text-charcoal/80 text-sm">
                  <strong>Horário de atendimento:</strong> Segunda a Sábado, das 10h00 às 20h00
                </p>
              </div>
            </div>

            {/* Reagendamento */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="font-cormorant text-3xl text-charcoal mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-gold" />
                Política de Reagendamento
              </h2>
              
              <div className="space-y-4 text-charcoal/80">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="leading-relaxed">
                    <strong>Reagendamento gratuito:</strong> Permitido uma vez, com aviso mínimo de 24 horas
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="leading-relaxed">
                    <strong>Segunda remarcação:</strong> Sujeita a disponibilidade e possível taxa administrativa de 10€
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="leading-relaxed">
                    <strong>Validade:</strong> Reagendamentos devem ser para data dentro de 30 dias
                  </p>
                </div>
              </div>
            </div>

            {/* Reembolsos */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="font-cormorant text-3xl text-charcoal mb-6">Política de Reembolso</h2>
              
              <div className="space-y-4 text-charcoal/80">
                <p className="leading-relaxed">
                  <strong>Cancelamento com mais de 24 horas:</strong> Reembolso total ou crédito para utilização futura
                </p>
                
                <p className="leading-relaxed">
                  <strong>Prazo de reembolso:</strong> Até 10 dias úteis, conforme método de pagamento original
                </p>
                
                <p className="leading-relaxed">
                  <strong>Crédito alternativo:</strong> Pode optar por crédito no spa (válido 6 meses) com bónus de 10%
                </p>
                
                <div className="bg-gold/10 p-4 rounded-lg mt-4">
                  <p className="text-sm leading-relaxed">
                    <strong>Nota:</strong> Cancelamentos tardios ou no-shows não são elegíveis para reembolso
                  </p>
                </div>
              </div>
            </div>

            {/* No-Show */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="font-cormorant text-3xl text-charcoal mb-6">Política de No-Show</h2>
              
              <div className="space-y-4 text-charcoal/80">
                <p className="leading-relaxed">
                  Se não comparecer à sua marcação sem aviso prévio:
                </p>
                
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Será cobrado 100% do valor do serviço</li>
                  <li>Futuras marcações podem requerer pagamento antecipado</li>
                  <li>Reservamo-nos o direito de recusar novas marcações em caso de no-shows repetidos</li>
                </ul>

                <div className="bg-gold/10 p-4 rounded-lg mt-4">
                  <p className="text-sm leading-relaxed">
                    <strong>Compreendemos imprevistos!</strong> Se tiver uma emergência genuína, contacte-nos assim 
                    que possível. Analisamos cada caso individualmente.
                  </p>
                </div>
              </div>
            </div>

            {/* Atrasos */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="font-cormorant text-3xl text-charcoal mb-6">Política de Atrasos</h2>
              
              <div className="space-y-4 text-charcoal/80">
                <p className="leading-relaxed">
                  Valorizamos a pontualidade para garantir a melhor experiência:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-cream/50 p-4 rounded-lg">
                    <p className="font-medium text-charcoal mb-2">Atraso até 10 minutos</p>
                    <p className="text-sm">Sessão mantida, mas pode terminar à hora prevista</p>
                  </div>
                  
                  <div className="bg-cream/50 p-4 rounded-lg">
                    <p className="font-medium text-charcoal mb-2">Atraso de 10-15 minutos</p>
                    <p className="text-sm">Sessão reduzida conforme tempo disponível</p>
                  </div>
                  
                  <div className="bg-cream/50 p-4 rounded-lg">
                    <p className="font-medium text-charcoal mb-2">Atraso superior a 15 minutos</p>
                    <p className="text-sm">Sessão pode ser cancelada sem reembolso</p>
                  </div>
                  
                  <div className="bg-cream/50 p-4 rounded-lg">
                    <p className="font-medium text-charcoal mb-2">Se souber que vai atrasar</p>
                    <p className="text-sm">Contacte-nos imediatamente para tentar ajustar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Casos Especiais */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="font-cormorant text-3xl text-charcoal mb-6">Casos Especiais e Força Maior</h2>
              
              <div className="space-y-4 text-charcoal/80">
                <p className="leading-relaxed">
                  Em situações excecionais, aplicamos flexibilidade:
                </p>
                
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li><strong>Emergências médicas:</strong> Cancelamento sem penalização (com comprovativo)</li>
                  <li><strong>Luto familiar:</strong> Reagendamento prioritário sem custos</li>
                  <li><strong>Condições climatéricas severas:</strong> Avaliado caso a caso</li>
                  <li><strong>Greve de transportes:</strong> Reagendamento facilitado</li>
                  <li><strong>Doença contagiosa:</strong> Por favor, cancele para proteção de todos (sem penalização com comprovativo)</li>
                </ul>
              </div>
            </div>

            {/* Cancelamento pelo Spa */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="font-cormorant text-3xl text-charcoal mb-6">Cancelamento pela Lennure Lux Spa</h2>
              
              <div className="space-y-4 text-charcoal/80">
                <p className="leading-relaxed">
                  Em situações raras, podemos necessitar cancelar a sua marcação:
                </p>
                
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Emergência ou doença do terapeuta</li>
                  <li>Problemas técnicos nas instalações</li>
                  <li>Situações de força maior</li>
                </ul>
                
                <p className="leading-relaxed mt-4">
                  Nestes casos, contactá-lo-emos imediatamente e ofereceremos:
                </p>
                
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Reagendamento prioritário</li>
                  <li>Desconto de cortesia na próxima visita</li>
                  <li>Reembolso total (se preferir)</li>
                </ul>
              </div>
            </div>

            {/* Pacotes e Vales */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="font-cormorant text-3xl text-charcoal mb-6">Pacotes e Vales de Oferta</h2>
              
              <div className="space-y-4 text-charcoal/80">
                <p className="leading-relaxed">
                  <strong>Pacotes múltiplos:</strong> Cada sessão está sujeita à política de cancelamento padrão
                </p>
                
                <p className="leading-relaxed">
                  <strong>Vales de oferta:</strong> Não são reembolsáveis em dinheiro, mas podem ser reagendados 
                  conforme disponibilidade, dentro do prazo de validade
                </p>
                
                <p className="leading-relaxed">
                  <strong>Validade:</strong> Consulte o prazo específico no seu vale ou pacote (geralmente 6-12 meses)
                </p>
              </div>
            </div>

            {/* Contacto Final */}
            <div className="bg-gradient-to-r from-gold/20 to-gold/10 rounded-lg p-8">
              <h2 className="font-cormorant text-3xl text-charcoal mb-4 text-center">
                Tem Dúvidas?
              </h2>
              <p className="text-charcoal/80 text-center mb-6">
                A nossa equipa está disponível para esclarecer qualquer questão sobre cancelamentos ou reagendamentos.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="tel:[telefone]" 
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg hover:shadow-md transition-shadow"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  <span className="text-charcoal font-medium">Ligar Agora</span>
                </a>
                <a 
                  href="mailto:[email]" 
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg hover:shadow-md transition-shadow"
                >
                  <Mail className="w-5 h-5 text-gold" />
                  <span className="text-charcoal font-medium">Enviar Email</span>
                </a>
              </div>
            </div>

            {/* Nota Final */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-charcoal/70 text-sm text-center leading-relaxed">
                Esta política visa equilibrar as necessidades dos nossos clientes com a sustentabilidade do nosso negócio. 
                Agradecemos a sua compreensão e colaboração.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CancellationPolicy;