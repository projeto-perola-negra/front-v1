import Heading from "../Heading";
import TimeLineLine from "../TimeLineLine";

export default function TimeLine() {
  return (
    <div className="flex flex-col gap-y-8">
      <Heading variant="h2" className="text-center">
        Linha do Tempo
      </Heading>

      <div className="flex flex-col gap-y-4 max-w-time-line mx-auto">
        <TimeLineLine variant="right" title="1997">
          Início do projeto de grupo de Dança – Afro, com o objetivo de
          fortalecer a cultura negra no munícipio, mostrando o empoderamento e a
          beleza da mulher negra. Realizávamos diversas apresentações na cidade.
        </TimeLineLine>
        <TimeLineLine variant="left" title="2000">
          Andamento com o projeto de grupo de dança, e o inicio do Bloco de
          Carnaval Os Sem Vergonha, que fazia parte dos desfiles que ocorriam na
          cidade de Botucatu.
        </TimeLineLine>
        <TimeLineLine variant="right" title="2001">
          Foram firmadas novas parcerias com o grupo de Dança, onde eram
          realizadas diversas apresentações com o grupo em outras cidades.,
          dando maior visibilidade para o trabalho desenvolvido. Iniciamos com
          os desfiles de carnaval, e a Associação de Moradores, onde tínhamos a
          Maria como Presidente.
        </TimeLineLine>
        <TimeLineLine variant="left" title="2009">
          Dávamos continuidade com todos os trabalhos já desenvolvidos, surge o
          convite do + Educação para trabalharmos com crianças e adolescentes do
          bairro, pois os mesmos viviam na ociosidade, sem oportunidades de
          acesso a atividades que pudessem desenvolve-las, afim de conquistarem
          um futuro melhor. Inauguração do projeto em uma casa alugada no Parque
          Marajoara, tendo capacidade para atender 40 crianças de 04 á 12 anos,
          o atendimento era apenas no período da tarde. Com o decorrer de dois
          anos, após diversas discussões e engajamentos das mulheres (mães) da
          comunidade, o projeto começa a atender no período da manhã e a tarde.
        </TimeLineLine>
        <TimeLineLine variant="right" title="2016">
          Devido a grande demanda de trabalho e o aumento da procura de crianças
          e adolescente pelo Projeto, passamos a atender em Espaço maior, com
          capacidade de até 65 atendidos, baseado nos recursos disponíveis da
          Secretaria de Educação e do CMDCA. Deixa-se de existir o projeto de
          Dança e de carnaval (Eventos Culturais), e o foco se torna apenas no
          Projeto Pérola Negra. Firmam-se novas parcerias com o Esporte,
          disponibilizando oficineiros para desenvolverem atividades de
          modalidade esportiva com nossos atendidos.
        </TimeLineLine>
        <TimeLineLine variant="left" title="2017">
          Devido ao trabalho de excelência, os pais passaram a reivindicar aos
          Órgãos Públicos solicitando o aumento de vagas no Projeto, para que
          pudessem contemplar novas crianças e adolescentes.
        </TimeLineLine>
        <TimeLineLine variant="right" title="2018">
          Conquistamos o aumento dos Repasses do dinheiro Público (Educação e
          CMDCA), e começamos a atender 80 crianças e adolescentes.
        </TimeLineLine>
        <TimeLineLine variant="left" title="2020">
          O projeto passa a atender 85 crianças e adolescentes em contraturno
          escolar, período manhã e tarde. Inicia-se um novo desafio com a
          PANDEMIA COVID-19, onde tivemos que nos ajustar com o trabalho remoto,
          e o atendimento das crianças e adolescente passa a ser online, devido
          ao isolamento social. As atividades eram passadas para as crianças
          fazerem em casa, com orientação da Coordenação pedagógica de das
          Monitoras.
          <br />
          <br />
          Devido ao aumento de desemprego, e famílias na linha da pobreza por
          conta da PANDEMIA, o Projeto firma novas parcerias, para poder dar
          suporte para as famílias do bairro marajoara, tanto dos nossos
          atendidos, como para todos os moradores. Foi ofertado entrega de
          marmitas em parceria com o SESI, cestas básicas, doação de agasalhos e
          cobertores. Todas as doações foram fidelizadas com parceiros que
          abraçaram essa causa junto conosco.
          <br />
          <br />
          Continuamos com nossa capacidade de funcionários, que se revezavam
          para realizar o trabalho junto com as crianças e a comunidade.
        </TimeLineLine>
        <TimeLineLine variant="right" title="2021">
          No segundo semestre desse ano, retornamos as atividades presenciais,
          com 30% da capacidade dos alunos, em forma de rodizio. Se inicia o
          Projeto da Mini Fazenda Essência da Terra. Projeto esse voltado para o
          trabalho ambiental e ecológico junto com crianças e adolescentes
          assistidas pelo projeto, mais com objetivo maior de contemplar toda a
          rede de escolas do Município de Botucatu.
        </TimeLineLine>
        <TimeLineLine variant="left" title="2022">
          Retornamos aos atendimentos presenciais com 100% dos nossos atendidos,
          seguindo todas as normas de Saúde. No segundo semestre o Projeto firma
          Parceria com o escritório de advocacia, que nos orienta juridicamente
          com documentações e suporte frente as demandas administrativas, e
          decisões a serem tomadas.
          <br />
          <br />
          Conquistamos o direito de termos um profissional de apoio pedagógico
          para crianças com espectro autista. Sendo incluído esse profissional
          em nosso plano de trabalho da Educação.
        </TimeLineLine>
        <TimeLineLine variant="right" title="2023">
          Damos continuidade aos trabalhos já realizados, fidelizando novos
          parceiros em prol do Projeto. Identificamos que o Projeto começou a
          ganhar mais visibilidade no Município de Botucatu nesse ano.
          <br />
          <br />
          Andamento de 50% do Projeto da Mini Fazenda, sempre em busca de novos
          parceiros e melhorias.
        </TimeLineLine>
      </div>
    </div>
  );
}
