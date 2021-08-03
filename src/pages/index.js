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
import Footer from "../components/footer"
const IndexPage = () => (
  <div class="">
    <section
      class="bg-cover bg-local bg-no-repeat"
      style={{ backgroundImage: `url(${inovador})` }}
    >
      <title>JARDINS</title>
      <link rel="icon" href="..\images\favicon.ico" />
      <Header />
      <div style={{ paddingTop: `10vh` }}>
        <div class="text-justify text-white ">
          <h1
            style={{
              paddingLeft: `5vw`,
              paddingBottom: `20vh`,
              lineHeight: `13vh`,
              textShadow: `0px 4px 12px rgba(0, 0, 0, 0.25), 0px 4px 16px rgba(0, 0, 0, 0.8), 4px 9px 46px rgba(0, 0, 0, 0.8)`,
              fontSize: `3vw`,
              fontFamily: "mono",
              letterSpacing: `2vh`,
            }}
          >
            INOVADOR,
            <br />
            SURPRENDENTE
            <br />E TECNOLÓGICO
          </h1>
        </div>
      </div>
      <div
        style={{
          paddingLeft: `4vw`,
          paddingRight: `4vw`,
          justifyItems: "center",
          alignItems: "center",
          position: `absolute`,
          bottom: `-6vh`,
        }}
      >
        <div
          class="text-white bg-green-dark rounded-xl font-mono"
          style={{
            display: "flex",
            paddingLeft: `5vw`,
            paddingRight: `5vw`,
            zIndex: `1`,
            alignItems: `center`,
            textAlign: `center`,
            justifyContent: `space-between`,
            letterSpacing: `.1vh`,
            fontSize: `1vw`,
            height: `12vh`,
            width: `90vw`,
            lineHeight: `1vw`,
          }}
        >
          <p>SEDE EMPRESARIAL</p>
          <svg height="50" width="2">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="50"
              style={{ stroke: `green`, strokeWidth: `2` }}
            />
          </svg>
          <p>ALTA RENTABILIDADE</p>{" "}
          <svg height="50" width="2">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="50"
              style={{ stroke: `green`, strokeWidth: `2` }}
            />
          </svg>
          <p>VALORIZAÇÃO IMOBILIÁRIA</p>{" "}
          <svg height="50" width="2">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="50"
              style={{ stroke: `green`, strokeWidth: `2` }}
            />
          </svg>
          <p>CONTRATOS ESTICADOS</p>
        </div>
      </div>
    </section>
    <section
      style={{ zindex: `0` }}
      class="w-full h-screen bg-gradient-to-tl from-gray-300 via-gray-50 to-gray-50 content-center flex"
    >
      <div
        style={{ padding: `2vw`, width: `100vw` }}
        class="grid grid-cols-2 items-center"
      >
        <div style={{ paddingRight: `5vw`, paddingLeft: `5vw` }}>
          <StaticImage src="../images/Mask Group.png" class="" quality={100} />
        </div>
        <div class="px-3">
          <h2
            class="leading-relaxed tracking-widest font-mono text-black text-right"
            style={{
              fontSize: `4vh`,
              lineHeight: `4vh`,
              textAlign: `right`,
              letterSpacing: `0.63em`,
              color: `#2E2E2E`,
              wordBreak: `break-word`,
            }}
          >
            UM NOVO PADRÃO DE ATENDIMENTO MÉDICO
          </h2>
          <p
            class="font-mono text-center"
            style={{
              fontSize: `1.6vw`,
              lineHeight: `3.5vh`,
              textAlign: `center`,
              letterSpacing: `0.48em`,
              color: `#2E2E2E`,
              paddingTop: `5vh`,
            }}
          >
            O Jardins Medical traz um novo conceito de excelência, com espaços
            amplos de atendimento, localização privilegiada E arquitetura
            inovadora, Contará com profissionais que são referência em suas
            áreas. todo projeto busca o melhor resultado para o paciente, e
            também para o profissional de saúde. Estarão disponíveis para venda
            salas para uso exclusivo da área de saúde.
          </p>
        </div>
      </div>
    </section>

    <section
      class="bg-cover bg-center bg-local bg-no-repeat grid grid-cols-2"
      style={{
        backgroundImage: `url(${bg3})`,
        height: `80vh`,
        paddingRight: `3vw`,
      }}
    >
      <div
        class="text-white font-mono col-2 grid grid-cols-4 grid-rows-5 col-start-2 -mt-10 -mb-20 place-content-center	place-items-center"
        src="../images/inovador.svg"
        style={{
          backgroundImage: `url(${ola1})`,
          backgroundAttachment: `local`,
        }}
      >
        <h1
          class="text-white w-full col-span-4 p-5 text-justify"
          style={{
            fontSize: `2vw`,
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
          style={{ height: `8vw`, width: `8vw` }}
          placeholder="blurred"
          layout="fixed"
        />
        <div class="text-white">
          <h1
            style={{ fontSize: `1.5vw`, textAlign: `left` }}
            class="font-mono"
          >
            5635,26
          </h1>
          <h2 style={{ fontSize: `1vw` }} class="font-mono pt-2">
            PARA SALAS MEDICAS
          </h2>
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
          <h1 style={{ fontSize: `1.5vw` }} class="font-mono">
            5 ANDARES DE ESTACIONAMENTO
          </h1>
          <h2 style={{ fontSize: `1vw` }} class="font-mono pt-2">
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
          <h1 style={{ fontSize: `1.5vw` }} class="font-mono">
            {" "}
            MULTIPLAS ESPECIALIDADES MEDICAS
          </h1>
          <h2 style={{ fontSize: `1vw` }} class="font-mono pt-2">
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
          <h1 style={{ fontSize: `1.5vw` }} class="font-mono">
            RDC50
          </h1>
          <h2 style={{ fontSize: `1vw` }} class="font-mono pt-2">
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
          <h1 style={{ fontSize: `1.5vw` }} class="font-mono">
            ELEVADORES MODERNOS
          </h1>
          <h2 style={{ fontSize: `1vw` }} class="font-mono pt-2">
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
          <h1 style={{ fontSize: `1.5vw` }} class="font-mono">
            MINI SHOPPING
          </h1>
          <h2 style={{ fontSize: `1vw` }} class="font-mono pt-2">
            ESTRUTURA COMPLETA{" "}
          </h2>
        </div>
        <button class="col-span-4 bg-white rounded-full font-mono h-16 w-3/4 text-green-dark">
          RESERVE JÁ
        </button>
      </div>
    </section>
    <section
      class="bg-cover bg-center bg-no-repeat w-full justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${lobby})`,
        paddingLeft: `20vw`,
        paddingRight: `20vw`,
      }}
    >
      <h1
        class="text-white font-mono font-thin"
        style={{
          paddingTop: `20vh`,
          fontSize: `5vw`,
          lineHeight: `171.2%`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#ffffff`,
          textShadow: `8px 13px 17px rgba(0, 0, 0, 0.55)`,
        }}
      >
        A MELHOR <br /> EXPERIÊNCIA
      </h1>
      <div
        class="flex justify-center"
        style={{ align: `center`, paddingBottom: `20vh` }}
      >
        <button
          style={{
            fontSize: `1.25vw`,
            lineHeight: `1.75vw`,
            width: `11vw`,
            letterSpacing: `0.1vw`,
            color: `#033415`,
            backgroundColor: `#ffffff`,
            padding: `0.75rem`,
            borderRadius: `9999px`,
          }}
          class="bg-green-dark rounded-full text-white w-1/3 text-center font-mono"
        >
          SAIBA MAIS
        </button>
      </div>
    </section>
    <section
      class="bg-cover bg-center bg-no-repeat w-full justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${lobby})`,
        paddingLeft: `20vw`,
        paddingRight: `20vw`,
      }}
    >
      <h1
        class="text-white font-mono leading-relaxed tracking-widest text-center font-thin w-full"
        style={{
          fontSize: `6vh`,
          lineHeight: `170%`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
          paddingTop: `30vh`,
        }}
      >
        LOBBY
      </h1>
      <p
        class=" text-center text-white font-bold font-mono leading-relaxed tracking-widest "
        style={{
          fontSize: `1vw`,
          lineHeight: `170%`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `0px 4px 7px rgba(0, 0, 0, 0.85)`,
          paddingBottom: `30vh`,
        }}
      >
        LUXUOSO LOBBY PARA PRESERVAR O ATENDENDIMENTO
      </p>
    </section>
    <section
      class="bg-cover bg-center bg-no-repeat w-full justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${rooftop})`,
        paddingLeft: `5vw`,
      }}
    >
      <h1
        class="text-white font-mono leading-relaxed tracking-widest text-9xl font-thin pt-60 w-full"
        style={{
          fontSize: `8vh`,
          lineHeight: `170%`,
          textAlign: `left`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
          paddingTop: `30vh`,
        }}
      >
        ROOFTOP
      </h1>
      <p
        class="text-white font-bold font-mono leading-relaxed tracking-widest "
        style={{
          fontSize: `1vw`,
          lineHeight: `170%`,
          textAlign: `left`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `0px 4px 7px rgba(0, 0, 0, 0.85)`,
          paddingBottom: `30vh`,
        }}
      >
        CONCEITO ARQUITETÔNICO PARA PROPORCIONAR MAIS <br /> QUALIDADE E
        CONFORTO COM UMA ÁREA DE EVENTOS
      </p>
    </section>
    <section
      class="bg-cover bg-center bg-no-repeat w-full justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${auditorio})`,
        paddingRight: `5vw`,
      }}
    >
      <h1
        class="text-white px-12 font-mono  tracking-widest text-right font-thin pt-40  w-full"
        style={{
          fontSize: `8vh`,
          lineHeight: `170%`,
          textAlign: `right`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
          paddingTop: `20vh`,
        }}
      >
        AUDITÓRIO <br /> PRINCIPAL
      </h1>
      <p
        class="text-white font-bold font-mono leading-relaxed tracking-widest "
        style={{
          fontSize: `1vw`,
          lineHeight: `170%`,
          textAlign: `right`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `0px 4px 7px rgba(0, 0, 0, 0.85)`,
          paddingBottom: `20vh`,
        }}
      >
        AUDOTÓTIO PARA 100 LUGARES , ONDE HAVERÃO <br /> EVENTOS PERIÓDICOS DA
        SAÚDE , TRAZENDO A JOÃO <br /> PESSOA UM LOCAL DE CAPACITAÇÃO E
        APRIMORAMENTO
      </p>
    </section>
    <section class="bg-cover bg-center bg-no-repeat w-full flex flex-col h-screen align-center justify-center bg-clip-border bg-gradient-to-tl from-gray-300 via-white to-white">
      <h1
        class=" text-black px-12 font-mono text-center leading-relaxed  tracking-widest text-6xl font-thin pt-10 pb-10 w-full"
        style={{
          fontSize: `4vw`,
          lineHeight: `171.2%`,
          textAlign: `center`,
          letterSpacing: `0.54em`,
        }}
      >
        100% ADEQUADO <br /> AS EXIGÊNCIAS <br /> DOS ORGÃOS <br /> REGULADORES
      </h1>
      <div
        style={{
          paddingRight: `1vw`,
          paddingLeft: `1vw`,
          display: `grid`,
          placeSelf: `center`,
        }}
        class="grid-cols-3 place-self-center py-8 bg-green-dark w-4/6 h-44 rounded-xl"
      >
        <div style={{ placeSelf: `center` }}>
          <StaticImage
            src="../images/anvisa_e.png"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
        <div style={{ placeSelf: `center` }}>
          <StaticImage
            src="../images/logo-abnt_e.png"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
        <div style={{ placeSelf: `center` }}>
          <StaticImage
            src="../images/ans_e.png"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </div>
    </section>
    <Footer />
  </div>
)

export default IndexPage
