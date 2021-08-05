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
  <div>
    <section
      style={{
        backgroundImage: `url(${inovador})`,
        backgroundSize: `100%`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `local`,
        placeContent: `center`,
      }}
    >
      <title>JARDINS</title>
      <link rel="icon" href="..\images\favicon.ico" />
      <Header />
      <h1
        style={{
          padding: `20vw`,
          color: `#ffffff`,
          paddingLeft: `5vw`,
          paddingRight: `0vw`,
          paddingBottom: `10vh`,
          lineHeight: `13vh`,
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
          height: `6vh`,
          width: `90vw`,
          lineHeight: `1vw`,
          justifySelf: "auto",
          alignSelf: "auto",
        }}
      >
        <p>SEDE EMPRESARIAL</p>
        <svg
          style={{
            height: `8vw`,
            width: `1vw`,
            stroke: `green`,
            strokeWidth: `2`,
          }}
        >
          <line x1="0" y1="0" x2="0" y2="200" />
        </svg>
        <p>ALTA RENTABILIDADE</p>
        <svg
          style={{
            height: `8vw`,
            width: `1vw`,
            stroke: `green`,
            strokeWidth: `2`,
          }}
        >
          <line x1="0" y1="0" x2="0" y2="200" />
        </svg>
        <p>VALORIZAÇÃO IMOBILIÁRIA</p>
        <svg
          style={{
            height: `8vw`,
            width: `1vw`,
            stroke: `green`,
            strokeWidth: `2`,
          }}
        >
          <line x1="0" y1="0" x2="0" y2="200" />
        </svg>
        <p>CONTRATOS ESTICADOS</p>
      </div>
    </section>
    <section
      style={{
        display: `flex`,
        width: `100%`,
        backgroundImage: `linear-gradient(to right, #ffffff, #d1d5db )`,
        alignItems: `center`,
        alignContent: `center`,
        placeItems: `center`,
        placeContent: `center`,
      }}
    >
      <div
        style={{
          paddingTop: `20vw`,
          paddingBottom: `20vw`,
          paddingRight: `2vw`,
          paddingLeft: `5vw`,
          width: `50vh`,
        }}
      >
        <StaticImage src="../images/Mask Group.png" quality={100} />
      </div>
      <div
        style={{
          paddingTop: `20vw`,
          paddingBottom: `20vw`,
          paddingRight: `5vw`,
          paddingLeft: `2vw`,
          width: `50vh`,
        }}
      >
        <h2
          style={{
            fontSize: `4vw`,
            lineHeight: `3.5vw`,
            textAlign: `right`,
            letterSpacing: `1vw`,
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
            lineHeight: `1.6vw`,
            textAlign: `justify`,
            letterSpacing: `0.48em`,
            color: `#2E2E2E`,
            paddingTop: `5vh`,
            paddingLeft: `2vw`,
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
        /* liberar lado esquerdo */
        style={{
          marginright: `5vw`,
          marginLeft: `55vw`,
          width: `40vw`,
          zIndex: `1`,
        }}
      >
        <div
          /* liberar lado esquerdo */
          style={{
            display: `flex`,
            flexDirection: "column",
            backgroundImage: `url(${ola1})`,
            backgroundAttachment: `local`,
            backgroundSize: `cover`,
          }}
        >
          <h1
            style={{
              padding: `3vw`,
              fontSize: `2vw`,
              lineHeight: `140%`,
              letterSpacing: `0.195em`,
              color: `#FFFFFF`,
              textShadow: `8px 13px 17px rgba(0, 0, 0, 0.55)`,
              textAlign: `justify`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            }}
          >
            O QUE O JARDINS MEDICAL OFERECE PARA VOCÊ?
          </h1>
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-between`,
              padding: `3vw`,
              height: `10vh`,
            }}
          >
            <div
              style={{ display: `flex`, flexDirection: `row`, width: `17vw` }}
            >
              <StaticImage
                src="../images/compass.png"
                quality={100}
                placeholder="blurred"
                layout="fixed"
              />
              <div style={{ display: `flex`, flexDirection: `column` }}>
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
                  }}
                >
                  PARA SALAS MEDICAS
                </h2>
              </div>
            </div>
            <div
              style={{ display: `flex`, flexDirection: `row`, width: `17vw` }}
            >
              <StaticImage
                src="../images/carro.png"
                quality={100}
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
                  5 ANDARES DE ESTACIONAMENTO
                </h1>
                <h2
                  style={{
                    color: `#ffffff`,
                    fontSize: `1vw`,
                    fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
                  }}
                >
                  TOTALIZANDO MAIS DE 150 VAGAS NA GARAGEM
                </h2>
              </div>
            </div>
          </div>
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-between`,
              padding: `3vw`,
              height: `10vh`,
            }}
          >
            <div
              style={{ display: `flex`, flexDirection: `row`, width: `17vw` }}
            >
              <StaticImage
                src="../images/medica.png"
                quality={100}
                placeholder="blurred"
                layout="fixed"
              />
              <div style={{ display: `flex`, flexDirection: `column` }}>
                <h1
                  style={{
                    color: `#ffffff`,
                    fontSize: `1.5vw`,
                    textAlign: `left`,
                    fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
                  }}
                >
                  MULTIPLAS ESPECIALIDADES MEDICAS
                </h1>
                <h2
                  style={{
                    color: `#ffffff`,
                    fontSize: `1vw`,
                    fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
                  }}
                >
                  DIVERSAS ESPECIALIDADES EM UM SÓ LOCAL
                </h2>
              </div>
            </div>
            <div
              style={{ display: `flex`, flexDirection: `row`, width: `17vw` }}
            >
              <StaticImage
                src="../images/anvisa.png"
                quality={100}
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
                  RDC50
                </h1>
                <h2
                  style={{
                    color: `#ffffff`,
                    fontSize: `1vw`,
                    fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
                  }}
                >
                  CONFORMIDADE COM AS NORMAS DA ANVISA
                </h2>
              </div>
            </div>
          </div>
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-between`,
              padding: `3vw`,
              height: `10vh`,
            }}
          >
            <div
              style={{ display: `flex`, flexDirection: `row`, width: `17vw` }}
            >
              <StaticImage
                src="../images/elevador.png"
                quality={100}
                placeholder="blurred"
                layout="fixed"
              />
              <div style={{ display: `flex`, flexDirection: `column` }}>
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
                  }}
                >
                  A ÚLTIMA TECNOLOGIA EM FLUXO DE PACIENTES
                </h2>
              </div>
            </div>
            <div
              style={{ display: `flex`, flexDirection: `row`, width: `17vw` }}
            >
              <StaticImage
                src="../images/bolsa.png"
                quality={100}
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
                  MINI SHOPPING
                </h1>
                <h2
                  style={{
                    color: `#ffffff`,
                    fontSize: `1vw`,
                    fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
                  }}
                >
                  ESTRUTURA COMPLETA
                </h2>
              </div>
            </div>
          </div>
          <button
            style={{
              alignSelf: `center`,
              padding: `1vw`,
              backgroundColor: `#ffffff`,
              marginBottom: `3vw`,
              textAlign: "center",
              contentAlign: "center",
              fontSize: `1vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              borderRadius: `9999px`,
              letterSpacing: `0.1vw`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              color: `#033415`,
            }}
          >
            RESERVE JÁ
          </button>
        </div>
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
          fontSize: `4vw`,
          lineHeight: `171.2%`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#ffffff`,
          textShadow: `8px 13px 17px rgba(0, 0, 0, 0.55)`,
          zIndex: `0`,
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
        backgroundSize: `cover`,
        backgroundImage: `url(${lobby})`,
        paddingLeft: `20vw`,
        paddingRight: `20vw`,
      }}
    >
      <h1
        class="leading-relaxed tracking-widest text-center font-thin w-full"
        style={{
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontSize: `4vw`,
          lineHeight: `170%`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
          paddingTop: `20vh`,
        }}
      >
        LOBBY
      </h1>
      <p
        class="text-center text-white font-bold leading-relaxed tracking-widest"
        style={{
          fontSize: `1vw`,
          lineHeight: `170%`,
          textAlign: `center`,
          letterSpacing: `0.63em`,
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          paddingBottom: `20vh`,
          color: `#FFFFFF`,
          textShadow: `0px 4px 7px rgba(0, 0, 0, 0.85)`,
        }}
      >
        LUXUOSO LOBBY PARA PRESERVAR O ATENDENDIMENTO
      </p>
    </section>
    <section
      style={{
        backgroundImage: `url(${rooftop})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `local`,
        justifyContent: "center",
      }}
    >
      <h1
        class="text-white leading-relaxed tracking-widest text-9xl font-thin pt-60 w-full"
        style={{
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontSize: `4vw`,
          fontHeight: `100`,
          lineHeight: `170%`,
          textAlign: `left`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
          paddingTop: `20vh`,
          paddingLeft: `4.7vw`,
        }}
      >
        ROOFTOP
      </h1>
      <p
        style={{
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontHeight: `700`,
          fontSize: `1vw`,
          lineHeight: `170%`,
          textAlign: `left`,
          letterSpacing: `0.63em`,
          color: `#FFFFFF`,
          textShadow: `0px 4px 7px rgba(0, 0, 0, 0.85)`,
          paddingLeft: `5vw`,
          paddingBottom: `20vh`,
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
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundAttachment: `local`,
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontSize: `4vw`,
          fontHeight: `100`,
          lineHeight: `120%`,
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
          paddingRight: `5vw`,
          paddingBottom: `20vh`,
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
        backgroundImage: `linear-gradient(to right, #ffffff, #d1d5db )`,
      }}
    >
      <h1
        style={{
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontWeight: `1rem`,
          paddingTop: `10vw`,
          fontSize: `5vw`,
          lineHeight: `1`,
          textAlign: `center`,
          letterSpacing: `0.5`,
          color: `#2E2E2E`,
          textShadow: `8px 13px 17px rgba(0, 0, 0, 0.55)`,
        }}
      >
        100% ADEQUADO <br /> AS EXIGÊNCIAS <br /> DOS ORGÃOS <br /> REGULADORES
      </h1>
      <div
        style={{
          marginTop: `10vh`,
          display: `flex`,
          flexDirection: `row`,
          placeSelf: `center`,
          backgroundColor: `#2E2E2E`,
          borderRadius: `2rem`,
          alignContent: `center`,
          justifyContent: `space-around`,
          marginBottom: `10vh`,
        }}
      >
        <div>
          <StaticImage
            style={{ padding: `10vw` }}
            src="../images/anvisa_e.png"
            quality={100}
            fit="inside"
            placeholder="blurred"
            layout="fixed"
          />
        </div>

        <div>
          <StaticImage
            style={{ padding: `10vw` }}
            src="../images/logo-abnt_e.png"
            quality={100}
            fit={`inside`}
            placeholder="blurred"
            layout="fixed"
          />
        </div>

        <div>
          <StaticImage
            style={{ padding: `10vw` }}
            src="../images/ans_e.png"
            quality={100}
            fit={`inside`}
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
