import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import bg3 from "../images/bg3.png"
import ola1 from "../images/ola1.svg"
import inovador from "../images/inovador.svg"
import bg4 from "../images/bg4.png"
import Header from "../components/header"
import auditorio from "../images/auditorio.png"
import lobby from "../images/lobby.png"
import rooftop from "../images/rooftop.png"
import branco from "../images/branco.png"
import footer from "../images/footer.png"

const IndexPage = () => (
  <div class="">
    <section
      class="bg-cover bg-local bg-no-repeat	bg-clip-border"
      style={{ backgroundImage: `url(${inovador})` }}
    >
      <title>JARDINS</title>
      <link rel="icon" href="..\images\favicon.ico" />
      <div class="h-screen">
        <Header />
        <div class="pt-48 w-4/6">
          <div class="text-6xl px-20 leading-relaxed tracking-widest font-mono text-justify text-white ">
            <h1
              style={{
                letterSpacing: `0.63em`,
                textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
              }}
            >
              INOVADOR,
            </h1>
            <h1
              style={{
                letterSpacing: `0.63em`,
                textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
              }}
            >
              SURPRENDENTE
            </h1>
            <h1
              style={{
                letterSpacing: `0.63em`,
                textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
              }}
            >
              E TECNOLÓGICO
            </h1>
          </div>
        </div>
        <div class="justify-items-center px-20 absolute -bottom-14 items-center">
          <div
            class="px-5 grid grid-cols-4 w-full h-30 leading-loose tracking-widest text-white bg-green-dark divide-x
          divide-green-500 divide-opacity-25 divide-2 rounded-xl text-center text-2xl font-mono justify-evenly items-center"
          >
            <p class="">SEDE EMPRESARIAL</p>
            <p class="">ALTA RENTABILIDADE</p>
            <p class="">VALORIZAÇÃO IMOBILIÁRIA</p>
            <p class="">CONTRATOS ESTICADOS</p>
          </div>
        </div>
      </div>
    </section>
    <section class="grid grid-cols-2 w-full h-screen px-10 bg-gradient-to-tl from-gray-300 via-gray-50 to-gray-50 items-center">
      <div class="">
        <StaticImage src="../images/Mask Group.png" class="" quality={100} />
      </div>
      <div class="w">
        <h2
          class="text-7xl md:text-5xl sm:text-4xl xs:text-4xl leading-relaxed tracking-widest font-mono text-black text-right"
          style={{
            width: `676.62px`,
            height: `187px`,
            left: `723.3px`,
            top: `917.09px`,
            fontSize: `36px`,
            lineHeight: `171.2%`,
            textAlign: `right`,
            letterSpacing: `0.63em`,
            color: `#2E2E2E`,
          }}
        >
          UM NOVO PADRÃO DE ATENDIMENTO MÉDICO
        </h2>
        <p
          class="text-2xl md:text-xl sm:text-sm xs:text-sm break-words mt-14 font-mono text-center"
          style={{
            width: `676.62px`,
            height: `342.83px`,
            fontSize: `18px`,
            lineHeight: `171.2%`,
            textAlign: `justify`,
            letterSpacing: `0.48em`,
            color: `#2E2E2E`,
          }}
        >
          O Jardins Medical traz um novo conceito de excelência, com espaços
          amplos de atendimento, localização privilegiada E arquitetura
          inovadora, Contará com profissionais que são referência em suas áreas.
          todo projeto busca o melhor resultado para o paciente, e também para o
          profissional de saúde. Estarão disponíveis para venda salas para uso
          exclusivo da área de saúde.
        </p>
      </div>
    </section>

    <section
      class="bg-cover bg-center bg-local bg-no-repeat	 grid grid-cols-2"
      style={{
        backgroundImage: `url(${bg3})`,
      }}
    >
      <div
        class="text-white font-mono col-2 grid grid-cols-4 grid-rows-5 col-start-2 -mt-6 p-6 mx-20 place-content-center	place-items-center flex-shrink"
        src="../images/inovador.svg"
        style={{
          backgroundImage: `url(${ola1})`,
          backgroundRepeat: `no-repeat`,
          height: `100vh`,
          weight: `10vw`,
          backgroundAttachment: `local`,
          backgroundSize: `100%`,
        }}
      >
        <h1
          class="text-white text-5xl w-full col-span-4 p-5 text-justify"
          style={{
            fontSize: `36px`,
            lineHeight: `147.7%`,
            letterSpacing: `0.195em`,
            color: `#FFFFFF`,
            textShadow: `8px 13px 17px rgba(0, 0, 0, 0.55)`,
          }}
        >
          O QUE O JARDINS MEDICAL OFERECE PARA VOCÊ?
        </h1>
        <StaticImage
          src="../images/compass.png"
          quality={100}
          placeholder="blurred"
          layout="fixed"
        />
        <div class="text-white">
          <h1 class="text-lg font-mono">5635,26</h1>
          <h2 class="text-sm font-mono pt-2">PARA SALAS MEDICAS</h2>
        </div>
        <StaticImage
          src="../images/carro.png"
          quality={100}
          placeholder="blurred"
          layout="fixed"
          width={100}
          height={100}
        />
        <div class="text-white">
          <h1 class="text-lg font-mono">5 ANDARES DE ESTACIONAMENTO</h1>
          <h2 class="text-sm font-mono pt-2">
            TOTALIZANDO MAIS DE 150 VAGAS NA GARAGEM
          </h2>
        </div>

        <StaticImage
          src="../images/medica.png"
          quality={100}
          placeholder="blurred"
          layout="fixed"
        />
        <div class="text-white">
          <h1 class="text-lg font-mono"> MULTIPLAS ESPECIALIDADES MEDICAS</h1>
          <h2 class="text-sm font-mono pt-2">
            DIVERSAS ESPECIALIDADES EM UM SÓ LOCAL
          </h2>
        </div>
        <StaticImage
          src="../images/anvisa.png"
          quality={100}
          placeholder="blurred"
          layout="fixed"
          width={100}
          height={100}
        />
        <div class="text-white">
          <h1 class="text-lg font-mono">RDC50</h1>
          <h2 class="text-sm font-mono pt-2">
            CONFORMIDADE COM AS NORMAS DA ANVISA
          </h2>
        </div>

        <StaticImage
          src="../images/elevador.png"
          quality={100}
          placeholder="blurred"
          layout="fixed"
        />
        <div class="text-white">
          <h1 class="text-lg font-mono">ELEVADORES MODERNOS</h1>
          <h2 class="text-sm font-mono pt-2">
            A ÚLTIMA TECNOLOGIA EM FLUXO DE PACIENTES
          </h2>
        </div>
        <StaticImage
          src="../images/bolsa.png"
          quality={100}
          placeholder="blurred"
          layout="fixed"
        />
        <div class="text-white">
          <h1 class="text-lg font-mono">MINI SHOPPING</h1>
          <h2 class="text-sm font-mono pt-2">ESTRUTURA COMPLETA </h2>
        </div>
        <button class="col-span-4 bg-white rounded-full font-mono h-16 w-3/4 text-green-dark">
          RESERVE JÁ
        </button>
      </div>
    </section>
    <section
      class="bg-cover bg-center bg-no-repeat w-full h-5/6  justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${bg4})`,
      }}
    >
      <h1
        class="text-white font-mono text-9xl text-center font-thin	pt-80 w-full"
        style={{
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#`,
          textShadow: `8px 13px 17px rgba(0, 0, 0, 0.55)`,
        }}
      >
        A MELHOR <br /> EXPERIÊNCIA
      </h1>
      <div class=" ml-64">
        <button class="bg-green-dark ml-96 rounded-full h-20 text-white w-1/3 text-center font-mono p-3 mt-20 mb-80">
          SAIBA MAIS
        </button>
      </div>
    </section>
    <section
      class="bg-cover bg-center bg-no-repeat w-full h-101 align- justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${lobby})`,
      }}
    >
      <h1
        class="text-white font-mono leading-relaxed tracking-widest text-9xl text-center font-thin pt-60 w-full"
        style={{
          fontSize: `48px`,
          lineHeight: `171.2%`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
        }}
      >
        LOBBY
      </h1>
      <p
        class=" text-center text-white font-bold text-3xl font-mono leading-relaxed  tracking-widest "
        style={{
          fontSize: `14px`,
          lineHeight: `171.2%`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `0px 4px 7px rgba(0, 0, 0, 0.85)`,
        }}
      >
        LUXUOSO LOBBY PARA PRESERVAR O ATENDENDIMENTO
      </p>
    </section>
    <section
      class="bg-cover bg-center bg-no-repeat w-full h-101 justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${rooftop})`,
      }}
    >
      <h1
        class="text-white font-mono leading-relaxed tracking-widest text-9xl px-12 font-thin pt-60 w-full"
        style={{
          fontSize: `48px`,
          lineHeight: `171.2%`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
        }}
      >
        ROOFTOP
      </h1>
      <p
        class="  text-white font-bold text-3xl font-mono leading-relaxed px-14 tracking-widest "
        style={{
          fontSize: `14px`,
          lineHeight: `171.2%`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `0px 4px 7px rgba(0, 0, 0, 0.85)`,
        }}
      >
        CONCEITO ARQUITETÔNICO PARA PROPORCIONAR MAIS <br /> QUALIDADE E
        CONFORTO COM UMA ÁREA DE EVENTOS
      </p>
    </section>
    <section
      class="bg-cover bg-center bg-no-repeat w-full h-101 align- justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${auditorio})`,
      }}
    >
      <h1
        class="text-white px-12 font-mono  tracking-widest text-9xl text-right font-thin pt-40  w-full"
        style={{
          fontSize: `48px`,
          lineHeight: `171.2%`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
        }}
      >
        AUDITÓRIO <br /> PRINCIPAL
      </h1>
      <p
        class=" text-right px-14 text-white font-bold text-3xl font-mono leading-relaxed  tracking-widest "
        style={{
          fontSize: `14px`,
          lineHeight: `171.2%`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `0px 4px 7px rgba(0, 0, 0, 0.85)`,
        }}
      >
        AUDOTÓTIO PARA 100 LUGARES , ONDE HAVERÃO <br /> EVENTOS PERIÓDICOS DA
        SAÚDE , TRAZENDO A JOÃO <br /> PESSOA UM LOCAL DE CAPACITAÇÃO E
        APRIMORAMENTO
      </p>
    </section>
    <section
      class="bg-cover bg-center bg-no-repeat w-full h-screen align-center justify-center bg-clip-border"
    >
      <h1
        class=" text-black px-12 font-mono text-center leading-relaxed  tracking-widest text-6xl font-thin pt-10  w-full"
        style={{
          fontSize: `48px`,
          lineHeight: `171.2%`,
          textAlign: `center`,
          letterSpacing: `0.54em`,
        }}
      >
        100% ADEQUADO <br /> AS EXIGÊNCIAS <br /> DOS ORGÃOS <br /> REGULADORES
      </h1>
      <div class="grid grid-cols-3 place-items-center ml-96 py-8 bg-green-dark w-100 h-44 rounded-xl ">
        <div class=" ">
          <StaticImage
            src="../images/anvisa_e.png"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
        <div class=" ">
          <StaticImage
            src="../images/logo-abnt_e.png"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
        <div class=" ">
          <StaticImage
            src="../images/ans_e.png"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </div>
    </section>
    <footer
      class="bg-cover py-5 grid grid-cols-5 h-28 justify-between place-items-center"
      style={{
        backgroundImage: `url(${footer})`,
      }}
    >
      <a href="#">
        <div class="">
          <StaticImage
            src="../images/face.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </a>
      <a href="#">
        <div>
          <StaticImage
            src="../images/tt.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </a>
      <a href="#">
        <div>
          <StaticImage
            src="../images/insta.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </a>
      <a href="#">
        <div>
          <StaticImage
            src="../images/linkedin.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </a>
      <a href="#">
        <div>
          <StaticImage
            src="../images/youtube.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </a>
    </footer>
  </div>
)

export default IndexPage
