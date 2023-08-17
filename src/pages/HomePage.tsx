import BlockContent from "../components/BlockContent";
import HomeLayout from "../layouts/HomeLayout";

import March from "../assets/project-march.png";
import Presentation from "../assets/presentation-to-kids.png";

import PrefeituraBotucatu from "../assets/prefeitura-botucatu.png";
import LogoCMDCA from "../assets/logo-cmdca.png";
import SecretariaEducacao from "../assets/secretaria-educacao-sp.png";
import TimeLine from "../components/TimeLine";
import Form from "../components/Form";

export default function HomePage() {
  return (
    <HomeLayout>
      <BlockContent
        variant="primary"
        aditionalContent={
          <img
            src={March}
            alt="Imagem de uma passeata da associação perola negra"
          />
        }
        title="Histórico"
        textContent={
          <>
            O Projeto Social Pérola Negra, da cidade de Botucatu-SP, atende 85
            crianças e adolescentes em contra turno escolar. Atualmente o
            projeto realiza diversas atividades socioeducativas abrangendo as
            áreas de Educação, Esporte, Lazer, Cultura, Meio ambiente e
            Assistência Social. A ideia surgiu em 2009 quando a Maria Ap.
            coordenadora deste projeto, teve a ideia de ter um espaço na
            comunidade para que as crianças e adolescentes, saíssem a ociosidade
            e de situações de risco, pois os mesmos convivem diariamente com o
            consumo e tráfico de drogas, alcoolismo, violência doméstica, dentre
            outros. A inexistência de outros espaços de convivência dentro da
            comunidade voltado ao atendimento deste público, agrava e
            intensifica as situações de vulnerabilidade e exposição do público à
            ociosidade, por isso o Projeto é de grande relevância para a
            comunidade. Para que todo esse trabalho continue acontecendo,
            necessitamos de parceiros que abracem essa causa junto conosco, a
            fim de fortalecer nosso trabalho e proporcionar melhorias para
            nossas crianças e adolescentes, pois o foco do Projeto é fazer com
            que nossos atendidos possam caminhar sempre em busca de um futuro
            melhor.
          </>
        }
      />

      <BlockContent
        variant="secondary"
        aditionalContent={
          <div className="h-full w-max">
            <img
              src={Presentation}
              alt="Imagem de uma apresentação para as crianças"
              className="h-full"
            />
          </div>
        }
        title="Missão"
        textContent={
          <>
            Oportunizar a crianças e adolescentes do bairro Parque Marajoara,
            ofertando atividades socioeducativas, de educação, esporte, cultura,
            saúde e lazer. Propiciando um ambiente de conhecimento sadio que
            contribua para seu desenvolvimento pessoal, propiciando aos
            assistidos e suas respectivas famílias um futuro melhor e a garantia
            de acesso a direitos.
          </>
        }
      />

      <BlockContent
        variant="tertiary"
        aditionalContent={
          <div className="flex gap-x-8 justify-center">
            <img src={PrefeituraBotucatu} alt="" />
            <img src={LogoCMDCA} alt="" />
            <img src={SecretariaEducacao} alt="" />
          </div>
        }
        title="Principais parceiros e fontes de receita da organização"
        textContent={
          <>
            Atualmente a instituição conta com recursos financeiros
            disponibilizados pela Secretaria de Educação e o CMDCA- Conselho
            Municipal dos direitos das crianças e adolescentes.
            <br />
            <br />
            Temos parceria com a cozinha Piloto do Município que disponibiliza a
            Merenda Escolar aos alunos, Banco de alimentos com destruição de
            frutas e legumes. O projeto também conta com parceiros voluntários.
          </>
        }
      />

      <TimeLine />

      <Form />
    </HomeLayout>
  );
}
