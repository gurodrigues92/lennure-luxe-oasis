import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const TermsOfService = () => {
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
              Termos de Uso
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
                Bem-vindo ao website da Lennure Lux Spa. Ao aceder e utilizar este site, concorda em cumprir 
                e estar vinculado aos seguintes termos e condições de uso. Se não concordar com alguma parte 
                destes termos, não deverá utilizar o nosso website.
              </p>
            </div>

            {/* 1. Aceitação */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">1. Aceitação dos Termos</h2>
              <p className="text-charcoal/80 leading-relaxed">
                O acesso e utilização do website www.lennureluxspa.pt (doravante "Site") estão sujeitos aos 
                presentes Termos de Uso, à Política de Privacidade e à legislação portuguesa aplicável. 
                A utilização do Site pressupõe a leitura e aceitação integral destes termos.
              </p>
            </div>

            {/* 2. Descrição dos Serviços */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">2. Descrição dos Serviços</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                A Lennure Lux Spa oferece serviços de bem-estar, incluindo:
              </p>
              <ul className="space-y-2 text-charcoal/80 list-disc list-inside">
                <li>Massagens terapêuticas e relaxantes</li>
                <li>Tratamentos corporais</li>
                <li>Rituais de bem-estar</li>
                <li>Experiências sensoriais personalizadas</li>
              </ul>
              <p className="text-charcoal/80 leading-relaxed mt-4">
                Todos os serviços são prestados por profissionais qualificados, com foco em ética, 
                privacidade e experiência de qualidade.
              </p>
            </div>

            {/* 3. Utilização do Site */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">3. Regras de Utilização</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Ao utilizar este Site, compromete-se a:
              </p>
              <ul className="space-y-2 text-charcoal/80 list-disc list-inside">
                <li>Fornecer informações verdadeiras, precisas e atualizadas</li>
                <li>Não utilizar o Site para fins ilegais ou não autorizados</li>
                <li>Não transmitir vírus, malware ou código prejudicial</li>
                <li>Não reproduzir, copiar ou explorar comercialmente o conteúdo sem autorização</li>
                <li>Respeitar a privacidade e direitos de outros utilizadores</li>
                <li>Não fazer reservas falsas ou fraudulentas</li>
              </ul>
            </div>

            {/* 4. Marcações */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">4. Condições de Marcação</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Para marcação de serviços:
              </p>
              <ul className="space-y-2 text-charcoal/80 list-disc list-inside">
                <li>As marcações estão sujeitas a disponibilidade</li>
                <li>É necessário fornecer dados de contacto válidos</li>
                <li>Confirmações são enviadas por email ou SMS</li>
                <li>É responsável por chegar à hora marcada</li>
                <li>Atrasos superiores a 15 minutos podem resultar em cancelamento</li>
                <li>Cancelamentos devem seguir a Política de Cancelamento</li>
              </ul>
            </div>

            {/* 5. Pagamentos */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">5. Condições de Pagamento</h2>
              <div className="space-y-4 text-charcoal/80">
                <p className="leading-relaxed">
                  <strong>Métodos de pagamento aceites:</strong>
                </p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Numerário (no local)</li>
                  <li>Cartão de crédito/débito (Visa, Mastercard)</li>
                  <li>Transferência bancária</li>
                  <li>MBWay</li>
                  <li>PayPal</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Os preços apresentados no Site incluem IVA à taxa legal em vigor. Reservamo-nos o direito 
                  de alterar os preços sem aviso prévio, embora as marcações confirmadas mantenham o preço acordado.
                </p>
              </div>
            </div>

            {/* 6. Propriedade Intelectual */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">6. Propriedade Intelectual</h2>
              <p className="text-charcoal/80 leading-relaxed">
                Todo o conteúdo do Site, incluindo textos, imagens, logótipos, design, vídeos e software, 
                é propriedade da Lennure Lux Spa ou dos seus licenciadores e está protegido por direitos de 
                autor e outras leis de propriedade intelectual. É proibida a reprodução, distribuição ou 
                utilização sem autorização prévia por escrito.
              </p>
            </div>

            {/* 7. Limitação de Responsabilidade */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">7. Limitação de Responsabilidade</h2>
              <div className="space-y-4 text-charcoal/80">
                <p className="leading-relaxed">
                  A Lennure Lux Spa não se responsabiliza por:
                </p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Danos resultantes da utilização ou impossibilidade de utilizar o Site</li>
                  <li>Interrupções temporárias do Site por manutenção ou falhas técnicas</li>
                  <li>Erros ou imprecisões no conteúdo (que serão corrigidos assim que detetados)</li>
                  <li>Ações de terceiros ou links externos</li>
                  <li>Reações adversas a tratamentos (quando contraindicações foram ocultadas pelo cliente)</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  O cliente é responsável por informar sobre condições de saúde relevantes antes dos tratamentos.
                </p>
              </div>
            </div>

            {/* 8. Código de Conduta */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">8. Código de Conduta e Ética</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                A Lennure Lux Spa opera com base em princípios de:
              </p>
              <ul className="space-y-2 text-charcoal/80 list-disc list-inside">
                <li><strong>Ética profissional:</strong> Todos os serviços são prestados com profissionalismo e respeito</li>
                <li><strong>Privacidade absoluta:</strong> Confidencialidade garantida</li>
                <li><strong>Bem-estar:</strong> Foco exclusivo na saúde e relaxamento do cliente</li>
                <li><strong>Tolerância zero:</strong> Comportamentos inadequados resultam em recusa de serviço</li>
              </ul>
              <p className="text-charcoal/80 leading-relaxed mt-4">
                Reservamo-nos o direito de recusar serviço a qualquer pessoa que viole estes princípios.
              </p>
            </div>

            {/* 9. Privacidade */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">9. Proteção de Dados</h2>
              <p className="text-charcoal/80 leading-relaxed">
                O tratamento dos seus dados pessoais é realizado em conformidade com o RGPD e a nossa 
                <Link to="/politica-privacidade" className="text-gold hover:underline ml-1">
                  Política de Privacidade
                </Link>. 
                Este Site utiliza cookies para melhorar a experiência de navegação.
              </p>
            </div>

            {/* 10. Acesso Geográfico */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">10. Acesso Geográfico</h2>
              <p className="text-charcoal/80 leading-relaxed">
                Este Site opera exclusivamente em Portugal e na União Europeia. O acesso de outras jurisdições 
                pode estar limitado por razões de privacidade e conformidade regulatória.
              </p>
            </div>

            {/* 11. Modificações */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">11. Modificações aos Termos</h2>
              <p className="text-charcoal/80 leading-relaxed">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações 
                entrarão em vigor imediatamente após a publicação no Site. A utilização continuada após 
                modificações constitui aceitação dos novos termos.
              </p>
            </div>

            {/* 12. Rescisão */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">12. Rescisão de Acesso</h2>
              <p className="text-charcoal/80 leading-relaxed">
                Podemos suspender ou terminar o seu acesso ao Site, sem aviso prévio, em caso de violação 
                destes Termos ou comportamento inadequado.
              </p>
            </div>

            {/* 13. Lei Aplicável */}
            <div>
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">13. Lei Aplicável e Jurisdição</h2>
              <p className="text-charcoal/80 leading-relaxed">
                Estes Termos de Uso são regidos pela lei portuguesa. Qualquer litígio decorrente da utilização 
                do Site será da competência exclusiva dos tribunais de Lisboa, Portugal, salvo disposição legal 
                imperativa em contrário.
              </p>
            </div>

            {/* 14. Contacto */}
            <div className="bg-gold/10 p-6 rounded-lg">
              <h2 className="font-cormorant text-3xl text-charcoal mb-4">14. Contacto</h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Para questões sobre estes Termos de Uso, contacte-nos:
              </p>
              <div className="space-y-1 text-charcoal/80">
                <p><strong>Email:</strong> [email de contacto]</p>
                <p><strong>Telefone:</strong> [telefone de contacto]</p>
                <p><strong>Morada:</strong> [morada completa]</p>
              </div>
            </div>

            {/* Aceitação */}
            <div className="border-t border-gold/20 pt-6">
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Ao utilizar o Site da Lennure Lux Spa, confirma que leu, compreendeu e aceita estar vinculado 
                a estes Termos de Uso, bem como à nossa Política de Privacidade e Política de Cancelamento.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;