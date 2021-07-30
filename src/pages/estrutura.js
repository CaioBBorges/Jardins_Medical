import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import bge2 from "../images/bge2.png"
import ola1 from "../images/ola1.svg"
import inovador from "../images/inovador.svg"
import bg4 from "../images/bg4.png"
import Header from "../components/header"

const estrutura = () => (
  <div class="">
    <section
      class="bg-cover bg-local bg-no-repeat	bg-clip-border h-screen"
      style={{
        backgroundImage: `url(${inovador})`,
        resize: `both`,
        overflow: `hidden`,
      }}
    >
      <title>JARDINS</title>
      <link rel="icon" href="..\images\favicon.ico" />
      <Header />
      <div class="pb-98">
        <h1
        class="text-center w-full p-56"
          style={{
            fontSize: `36px`,
            lineHeight: `171.2%`,
            textAlign: `center`,
            letterSpacing: `0.63em`,
            color: `#FFFFFF`,
            textShadow: `0px 4px 12px rgba(0, 0, 0, 0.25), 0px 4px 16px rgba(0, 0, 0, 0.8), 4px 9px 46px rgba(0, 0, 0, 0.8)`,
          }}
        >
          ESTRUTURA PERFEITA PARA VOCÊ FOCAR NO QUE REALMENTE IMPORTA:
          <br />
          SEU PACIENTE.
        </h1>
      </div>
    </section>
    <section
      class="bg-cover bg-local bg-no-repeat	bg-clip-border h-screen place-content-center"
      style={{
        backgroundImage: `url(${bge2})`,
        resize: `both`,
        overflow: `hidden`,
      }}
    >
      <div
        style={{
          margin: `20rem`,
          width: `1244px`,
          height: `243px`,
          left: `123px`,
          top: `2508px`,
          background: ` rgba(255, 255, 255, 0.02)`,
          backdropFilter: `blur(15px)`,
          borderRadius: `59px`,
        }}
      >
        <p
          style={{
            fontSize: `18px`,
            lineHeight: `171.2%`,
            textAlign: `center`,
            letterSpacing: `0.63em`,
            color: `#FFFFFF`,
            textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 7px rgba(0, 0, 0, 0.8), 4px 9px 34px rgba(0, 0, 0, 0.8)`,
          }}
        >
          EM QUASE EM SEUS 5700,00m² de área O JARDINS MEDICAL OFERECE UMA
          ESTRUTURA COMPLETA PARA SUA ROTINA COM TODOS OS ASPECTOS FACILITIES ,
          VOCÊ TEM TUDO O QUE PRECISA PARA COMPOR UMA SEDE MÉDICA CLASSE (AA) EM
          SERVIÇO E ATENDIMENTO.
        </p>
      </div>
    </section>
  </div>
)

export default estrutura
