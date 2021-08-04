import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import bge2 from "../images/bge2.png"
import inovador from "../images/inovador.svg"
import bg4 from "../images/bg4.png"
import Header from "../components/header"
import bg3 from "../images/bg3.png"
import auditorio from "../images/auditorio.png"
import Footer from "../components/footer"

const estrutura = () => (
  <div>
    <title>JARDINS</title>
    <link rel="icon" href="..\images\favicon.ico" />
    <section
      style={{
        width: "100%",
        backgroundImage: `url(${inovador})`,
        backgroundSize: `100%`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `local`,
        placeContent: `center`,
      }}
    >
      <Header />
      <div>
        <h1
          style={{
            fontSize: `3vw`,
            paddingTop: `40vw`,
            paddingRight: `10vw`,
            paddingLeft: `10vw`,
            paddingBottom: `66vw`,
            lineHeight: `4vw`,
            textAlign: `center`,
            letterSpacing: `0.63em`,
            color: `#FFFFFF`,
            textShadow: `0px 4px 12px rgba(0, 0, 0, 0.25), 0px 4px 16px rgba(0, 0, 0, 0.8), 4px 9px 46px rgba(0, 0, 0, 0.8)`,
          }}
        >
          ESTRUTURA PERFEITA PARA VOCÊ FOCAR NO QUE REALMENTE IMPORTA:
          <br />
          SEU PACIENTE
        </h1>
      </div>
    </section>
    <section
      class="bg-cover bg-no-repeat bg-clip-border grid grid-rows-2"
      style={{
        backgroundImage: `url(${bge2})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `local`,
        placeContent: `center`,
      }}
    >
      <p
        style={{
          padding: `3vw`,
          margin: `5vw`,
          background: ` rgba(200, 200, 200, 0.05)`,
          backdropFilter: `blur(3px)`,
          borderRadius: `1rem`,
          fontSize: `2vh`,
          lineHeight: `3vh`,
          textAlign: `justify`,
          letterSpacing: `1.2vw`,
          color: `#FFFFFF`,
          textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 7px rgba(0, 0, 0, 0.8), 4px 9px 34px rgba(0, 0, 0, 0.8)`,
        }}
      >
        EM SEUS QUASE 5700,00m² DE ÁREA O JARDINS MEDICAL OFERECE UMA ESTRUTURA
        COMPLETA PARA SUA ROTINA COM TODOS OS ASPECTOS FACILITIES , VOCÊ TEM
        TUDO O QUE PRECISA PARA COMPOR UMA SEDE MÉDICA CLASSE (AA) EM SERVIÇO E
        ATENDIMENTO.
      </p>
    </section>
    <section
      style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `local`,
        zIndex: `0`,
        textAlign: `center`,
      }}
    >
      <div
        style={{
          paddingTop: `10vh`,
          paddingBottom: `10vh`,
          paddingRight: `8vw`,
          paddingLeft: `8vw`,
        }}
        class="grid grid-cols-4 place-items-center place-content-start"
      >
        <div style={{ paddingRight: `4vw`, width: `18vw` }}>
          <StaticImage
            src="../images/lobby_e.svg"
            style={{ height: `40vh`, width: `18vw` }}
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
          <div
            style={{
              width: `18vw`,
              background: `rgba(255, 255, 255, 0.1)`,
              backdropFilter: `blur(20px)`,
            }}
          >
            <h1
              style={{
                fontSize: `1.5vw`,
                textAlign: `center`,
                width: `18vw`,
                height: `2vw`,
                padding: `2vw`,
              }}
              class="font-bold text-white font-mono"
            >
              LOBBY
            </h1>
            <p
              style={{
                fontSize: `1vw`,
                textAlign: `center`,
                width: `18vw`,
                height: `18vw`,
                padding: `2vw`,
              }}
              class="font-thin text-white text-sm leading-relaxed tracking-widest font-mono"
            >
              LOBBY PERFEITO PARA RECEBER TODO O CORPO MÉDICO E OS PACIENTES,
              IDEAL PARA INFORMAR, GUIAR E ORIENTAR AS PESSOAS PROCURANDO POR
              CONSULTÓRIOS.
            </p>
          </div>
        </div>
        <div style={{ paddingRight: `4vw`, width: `18vw` }}>
          <StaticImage
            src="../images/salas_cirurgia.svg"
            style={{ width: `18vw`, height: `18vh` }}
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
          <div
            style={{
              width: `18vw`,
              background: `rgba(255, 255, 255, 0.1)`,
              backdropFilter: `blur(20px)`,
            }}
          >
            <h1
              style={{ fontSize: `1.5vw`, textAlign: `center`, width: `18vw` }}
              class="font-bold text-white font-mono"
            >
              SALAS PARA CENTROS <br /> CIRUGICOS{" "}
            </h1>
            <p
              style={{ fontSize: `1vw`, textAlign: `center`, width: `18vw` }}
              class="px-5 font-thin text-white text-sm leading-relaxed tracking-widest font-mono"
            >
              O JARDINS MEDICAL, OFERECE UMA ESTRUTURA IDEAL PARA CENTROS
              CENTROS CIRURGICOS E SALA DE OPERAÇÕES.
            </p>
          </div>
        </div>
        <div style={{ paddingRight: `4vw`, width: `18vw` }}>
          <StaticImage
            src="../images/rooftop_e.svg"
            style={{ width: `18vw`, height: `18vh` }}
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
          <div
            style={{
              width: `18vw`,
              background: `rgba(255, 255, 255, 0.1)`,
              backdropFilter: `blur(20px)`,
            }}
          >
            <h1
              style={{ fontSize: `1.5vw`, textAlign: `center`, width: `18vw` }}
              class="font-bold text-white font-mono"
            >
              ROOFTOP
            </h1>
            <p
              style={{ fontSize: `1vw`, textAlign: `center`, width: `18vw` }}
              class="px-5 font-thin text-white text-sm leading-relaxed tracking-widest font-mono"
            >
              UM AMBIENTE CONFORTÁVEL E ACONCHEGANTE, IDEAL PARA OFERECER
              MOMENTOS DE TRANQUILIDADE A TODOS OS PACIENTES E TERCEIROS.
            </p>
          </div>
        </div>
        <div style={{ paddingRight: `4vw`, width: `18vw` }}>
          <StaticImage
            src="../images/auditorio.png"
            style={{ width: `18vw`, height: `18vh` }}
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
          <div
            style={{
              width: `18vw`,
              background: `rgba(255, 255, 255, 0.1)`,
              backdropFilter: `blur(20px)`,
            }}
          >
            <h1
              style={{ fontSize: `1.5vw`, textAlign: `center`, width: `18vw` }}
              class="font-bold text-white font-mono"
            >
              AUDITÓRIO
            </h1>
            <p
              style={{ fontSize: `1vw`, textAlign: `center`, width: `18vw` }}
              class="pt-5 px-5 font-thin text-white text-sm leading-relaxed tracking-widest font-mono"
            >
              UM LOCAL PARA INCENTIVAR PALESTRAS E REUNIÕES DE PESQUISA E
              ATUAÇÕES DOS PROFISSIONAIS DA ÁREA DA SAÚDE.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="bg-cover bg-center bg-no-repeat w-full h-5/6  justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${bg4})`,
      }}
    >
      <h1
        class="font-thin"
        style={{
          fontWeight: `100`,
          paddingTop: `20vh`,
          width: `100%`,
          fontSize: `7vw`,
          lineHeight: `171.2%`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `8px 13px 17px rgba(0, 0, 0, 0.55)`,
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
        }}
      >
        A MELHOR <br /> EXPERIÊNCIA
      </h1>
      <button
        style={{
          padding: `1vw`,
          backgroundColor: `#033415`,
          marginRight: `3vw`,
          textAlign: "center",
          fontSize: `1vw`,
          lineHeight: `1.75vw`,
          width: `11vw`,
          padding: `1vw`,
          borderRadius: `9999px`,
          letterSpacing: `0.1vw`,
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          color: `#ffffff`,
          selfAlign: `center`,
        }}
      >
        SAIBA MAIS
      </button>
    </section>
    <section
      style={{
        backgroundImage: `url(${auditorio})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `local`,
        zIndex: `0`,
        textAlign: `center`,
        justifyContent: `center`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
      }}
    >
      <h1
        class="font-mono font-thin"
        style={{
          paddingTop: `10vw`,
          paddingRight: `1vw`,
          paddingLeft: `1vw`,
          lineHeight: `171.2%`,
          textAlign: `center`,
          letterSpacing: `0.54em`,
          color: `#FFFFFF`,
          textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
          width: `100%`,
          fontSize: `3vw`,
        }}
      >
        100% ADEQUADO AS EXIGÊNCIAS DOS ORGÃOS REGULADORES
      </h1>
      <div
        style={{
          marginBottom: `10vh`,
          fontSize: `1vw`,
          padding: `4vw`,
        }}
        class="bg-green-dark grid grid-cols-2 text-white grid-rows-3 w-5/6 rounded-3xl"
      >
        <div>
          <h1 class="text-xl lg:text-4xl">Circulações Externas e Internas</h1>
          <ul>
            <li>Acessos</li>
            <li>Estacionamentos</li>
            <li>Circulações horizontais</li>
            <li>Circulações verticais</li>
          </ul>
        </div>
        <div>
          <h1 class="text-xl lg:text-4xl">
            Instalações Prediais Ordinárias e Especiais.
          </h1>
          <ul>
            <li>Instalações hidro-sanitárias</li>
            <li>instalações elétricas e eletrônicas</li>
            <li>Instalações fluído-mecânicas</li>
            <li>Instalações de climatização</li>
          </ul>
        </div>
        <div>
          <h1 class="text-xl lg:text-4xl">Condições Ambientais de Conforto.</h1>
          <ul>
            <li>Conforto higrotérmico</li>
            <li>Conforto acústico</li>
            <li>Conforto luminoso a partir de fonte natural</li>
          </ul>
        </div>
        <div>
          <h1 class="text-xl lg:text-4xl">
            Condições de Segurança Contra Incêndio.
          </h1>
          <ul>
            <li>Critérios de projeto</li>
            <li>Normatização referente a segurança contra incêndio</li>
          </ul>
        </div>
        <div>
          <h1 class="text-xl lg:text-4xl">Controle de Infecção Hospitalar</h1>
          <ul>
            <li>Conceituação Básica</li>
            <li>Critérios de Projeto</li>
          </ul>
        </div>
        <div class="grid grid-cols-3 place-items-center">
          <div class="">
            <StaticImage
              src="../images/anvisa_e.png"
              style={{ width: `4vw`, height: `4vw` }}
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />
          </div>
          <div class=" ">
            <StaticImage
              src="../images/logo-abnt_e.png"
              style={{ width: `10vw`, height: `4vw` }}
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />
          </div>
          <div class=" ">
            <StaticImage
              src="../images/ans_e.png"
              style={{ width: `12vw`, height: `4vw` }}
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
)

export default estrutura
