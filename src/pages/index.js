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
      style={{
        width: "100%",
        backgroundImage: `url(${inovador})`,
        backgroundSize: `100%`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `local`,
      }}
    >
      <title>JARDINS</title>
      <link rel="icon" href="..\images\favicon.ico" />
      <Header />
      <h1
        style={{
          paddingTop: `30vw`,
          color: `#ffffff`,
          paddingLeft: `5vw`,
          paddingBottom: `30vw`,
          lineHeight: `13vw`,
          textShadow: `0px 4px 12px rgba(0, 0, 0, 0.25), 0px 4px 16px rgba(0, 0, 0, 0.8), 4px 9px 46px rgba(0, 0, 0, 0.8)`,
          fontSize: `3vw`,
          fontFamily: "mono",
          letterSpacing: `2vh`,
          textAlign: `justify`,
        }}
      >
        INOVADOR,
        <br />
        SURPRENDENTE
        <br />E TECNOLÓGICO
      </h1>
      <div
        style={{
          paddingLeft: `4vw`,
          paddingRight: `4vw`,
          justifyItems: "center",
          alignItems: "center",
          position: ``,
          bottom: `-6vh`,
        }}
      >
        <div
          style={{
            backgroundColor: `#033415`,
            fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            borderRadius: `0.75rem`,
            color: `#ffffff`,
            display: "flex",
            padding: `5vw`,
            zIndex: `1`,
            alignItems: `center`,
            textAlign: `center`,
            justifyContent: `space-between`,
            letterSpacing: `.1vh`,
            fontSize: `1vw`,
            height: `12vw`,
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
          <p>ALTA RENTABILIDADE</p>
          <svg height="50" width="2">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="50"
              style={{ stroke: `green`, strokeWidth: `2` }}
            />
          </svg>
          <p>VALORIZAÇÃO IMOBILIÁRIA</p>
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
      <section
        style={{
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundAttachment: `local`,
          zindex: `0`,
          display: `flex`,
          width: `100%`,
          height: `80vh`,
          alignContent: `center`,
        }}
        class="bg-gradient-to-tl from-gray-300 via-gray-50 to-gray-50"
      >
        <div
          style={{ padding: `2vw`, width: `100vw`, marginTop: `4vh` }}
          class="grid grid-cols-2 items-center"
        >
          <div style={{ paddingRight: `5vw`, paddingLeft: `5vw` }}>
            <StaticImage
              src="../images/Mask Group.png"
              class=""
              quality={100}
            />
          </div>
          <div class="px-3">
            <h2
              style={{
                fontSize: `4vw`,
                lineHeight: `4vh`,
                textAlign: `right`,
                letterSpacing: `0.63em`,
                color: `#2E2E2E`,
                wordBreak: `break-word`,
                fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              }}
            >
              UM NOVO PADRÃO DE ATENDIMENTO MÉDICO
            </h2>
            <p
              style={{
                fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,

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
              também para o profissional de saúde. Estarão disponíveis para
              venda salas para uso exclusivo da área de saúde.
            </p>
          </div>
        </div>
      </section>
    </section>

    <section
      style={{
        backgroundImage: `url(${bg3})`,
        height: `80vh`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `local`,
      }}
    >
      <div
        class="col-2 grid grid-cols-4 grid-rows-5 col-start-2"
        src="../images/inovador.svg"
        style={{
          padding: `3vw`,
          color: `#ffffff`,
          marginright: `10vw`,
          marginLeft: `53vw`,
          placeContent: `center`,
          placeItems: `center`,
          alignItems: `center`,
          backgroundImage: `url(${ola1})`,
          backgroundAttachment: `local`,
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
        }}
      >
        <h1
          class="col-span-4"
          style={{
            padding: `5v`,
            width: `100%`,
            fontSize: `2vw`,
            lineHeight: `147.7%`,
            letterSpacing: `0.195em`,
            color: `#FFFFFF`,
            textShadow: `8px 13px 17px rgba(0, 0, 0, 0.55)`,
            textAlign: `justify`,
            fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
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
        <div>
          <h1
            style={{
              color: `#ffffff`,
              fontSize: `1.5vw`,
              textAlign: `left`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            }}
          >
            5635,26
          </h1>
          <h2
            style={{
              color: `#ffffff`,
              fontSize: `1vw`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              paddingTop: `4vh`,
            }}
          >
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
        <div>
          <h1
            style={{
              color: `#ffffff`,
              fontSize: `1.5vw`,
              textAlign: `left`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            }}
          >
            5 ANDARES DE ESTACIONAMENTO
          </h1>
          <h2
            style={{
              color: `#ffffff`,
              fontSize: `1vw`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              paddingTop: `4vh`,
            }}
          >
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
          <h1
            style={{
              color: `#ffffff`,
              fontSize: `1.5vw`,
              textAlign: `left`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            }}
          >
            {" "}
            MULTIPLAS ESPECIALIDADES MEDICAS
          </h1>
          <h2
            style={{
              color: `#ffffff`,
              fontSize: `1vw`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              paddingTop: `4vh`,
            }}
          >
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
          <h1
            style={{
              color: `#ffffff`,
              fontSize: `1.5vw`,
              textAlign: `left`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            }}
          >
            RDC50
          </h1>
          <h2
            style={{
              color: `#ffffff`,
              fontSize: `1vw`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              paddingTop: `4vh`,
            }}
          >
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
          <h1
            style={{
              color: `#ffffff`,
              fontSize: `1.5vw`,
              textAlign: `left`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            }}
          >
            ELEVADORES MODERNOS
          </h1>
          <h2
            style={{
              color: `#ffffff`,
              fontSize: `1vw`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              paddingTop: `4vh`,
            }}
          >
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
          <h1
            style={{
              color: `#ffffff`,
              fontSize: `1.5vw`,
              textAlign: `left`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            }}
          >
            MINI SHOPPING
          </h1>
          <h2
            style={{
              color: `#ffffff`,
              fontSize: `1vw`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              paddingTop: `4vh`,
            }}
          >
            ESTRUTURA COMPLETA
          </h2>
        </div>
        <button
          class="col-span-4"
          style={{
            padding: `1vw`,
            backgroundColor: `##ffffff`,
            marginRight: `3vw`,
            textAlign: "center",
            fontSize: `1vw`,
            lineHeight: `1.75vw`,
            width: `11vw`,
            padding: `1vw`,
            borderRadius: `9999px`,
            letterSpacing: `0.1vw`,
            fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            color: `#033415`,
          }}
        >
          RESERVE JÁ
        </button>
      </div>
    </section>
    <section
      style={{
        backgroundImage: `url(${bg4})`,
        paddingLeft: `20vw`,
        paddingRight: `20vw`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `local`,
        width: `100%`,
        justifyContent: `center`,
      }}
    >
      <h1
        style={{
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontWeight: `100`,
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
          }}
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
          fontSize: `6vw`,
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
      style={{
        width: "100%",
        backgroundImage: `url(${rooftop})`,
        backgroundSize: `100%`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `local`,
        justifyContent: "center",
      }}
    >
      <h1
        class="text-white font-mono leading-relaxed tracking-widest text-9xl font-thin pt-60 w-full"
        style={{
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontSize: `8vw`,
          fontHeight: `100`,
          lineHeight: `170%`,
          textAlign: `left`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
          paddingTop: `20vh`,
          paddingLeft:`4.7vw`
        }}
      >
        ROOFTOP
      </h1>
      <p
        class="text-white font-bold font-mono leading-relaxed tracking-widest "
        style={{
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontHeight: `700`,
          fontSize: `1vw`,
          lineHeight: `170%`,
          textAlign: `left`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `0px 4px 7px rgba(0, 0, 0, 0.85)`,
          paddingBottom: `20vh`,
          paddingLeft: `5vw`,
        }}
      >
        CONCEITO ARQUITETÔNICO PARA PROPORCIONAR MAIS <br /> QUALIDADE E
        CONFORTO COM UMA ÁREA DE EVENTOS
      </p>
    </section>
    <section
      style={{
        width: "100%",
        backgroundImage: `url(${auditorio})`,
        backgroundSize: `100%`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `local`,
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontSize: `8vw`,
          fontHeight: `100`,
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
        style={{
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontHeight: `700`,
          fontSize: `1vw`,
          lineHeight: `170%`,
          textAlign: `right`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `0px 4px 7px rgba(0, 0, 0, 0.85)`,
          paddingBottom: `20vh`,
          paddingRight: `5vw`,
        }}
      >
        AUDOTÓRIO PARA 100 LUGARES , ONDE HAVERÃO <br /> EVENTOS PERIÓDICOS DA
        SAÚDE , TRAZENDO A JOÃO <br /> PESSOA UM LOCAL DE CAPACITAÇÃO E
        APRIMORAMENTO
      </p>
    </section>
    <section
      style={{
        width: `100%`,
        display: `flex`,
        flexDirection: `column`,
        textAlign: `center`,
        justifyContent: `center`,
      }}
      class="bg-clip-border bg-gradient-to-tl from-gray-300 via-white to-white"
    >
      <h1
        style={{
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontWeight: `100`,
          padding: `10vh`,
          fontSize: `5vw`,
          lineHeight: `1.2`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: ``,
          textShadow: `8px 13px 17px rgba(0, 0, 0, 0.55)`,
        }}
      >
        100% ADEQUADO <br /> AS EXIGÊNCIAS <br /> DOS ORGÃOS <br /> REGULADORES
      </h1>
      <div
        style={{
          padding: `3vw`,
          display: `flex`,
          flexDirection: `row`,
          height: `15vh`,
          placeSelf: `center`,
          backgroundColor: `#2E2E2E`,
          marginBottom: `10vw`,
          borderRadius: `2rem`,
        }}
      >
        <StaticImage
          src="../images/anvisa_e.png"
          quality={100}
          style={{
            placeSelf: `center`,
            margin: `5vw`,
          }}
          placeholder="blurred"
          layout="fixed"
        />
        <StaticImage
          src="../images/logo-abnt_e.png"
          quality={100}
          style={{
            placeSelf: `center`,
            margin: `5vw`,
          }}
          placeholder="blurred"
          layout="fixed"
        />
        <StaticImage
          src="../images/ans_e.png"
          quality={100}
          style={{
            placeSelf: `center`,
            margin: `5vw`,
          }}
          placeholder="blurred"
          layout="fixed"
        />
      </div>
    </section>
    <Footer />
  </div>
)

export default IndexPage
