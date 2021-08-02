import * as React from "react"
import lobby from "../images/lobby.png"
import Header from "../components/header"
import tablet from "../images/tablet.png"

const localizacao = () => (
  <div class="">
    <title>JARDINS</title>
    <link rel="icon" href="..\images\favicon.ico" />
    <section
      class="bg-cover bg-local"
      style={{
        backgroundImage: `url(${lobby})`,
      }}
    >
      <Header />
      <div style={{paddingLeft:`5vw`,paddingRight:`5vw`}}class="h-screen grid grid-cols-2 grid-row-1 xs:grid-cols-1 xs:gridrow-2 justify-between place-items-center w-full h-full">
        <div class="flex flex-col items-center">
          <h1
            class=" text-white font-mono text-center h-full"
            style={{
              fontSize: `5vw`,
              paddingTop: `10vh`,
              lineHeight: `5vw`,
              letterSpacing: `.5vw`,
              color: `#FFFFFF`,
                textShadow: `0px 4px 12px rgba(0, 0, 0, 0.25), 0px 4px 16px rgba(0, 0, 0, 0.8), 4px 9px 46px rgba(0, 0, 0, 0.8)`,
            }}
          >
            ONDE ESTAMOS?
          </h1>
          <p
            class="text-white font-mono text-center"
            style={{
              fontSize: `3vw`,
              paddingTop: `10vw`,
              lineHeight: `3vw`,
              letterSpacing: `.5vw`,
              color: `#FFFFFF`,
              textShadow: `0px 4px 12px rgba(0, 0, 0, 0.25), 0px 4px 16px rgba(0, 0, 0, 0.8), 4px 9px 46px rgba(0, 0, 0, 0.8)`,
            }}
          >
            ESTAMOS LOCALIZADOS NO BAIRRO DOS EXPETICIONÁROS
          </p>
          <div class="w-full flex justify-center pt-20">
            <button class="bg-green-dark w-3/6 font-mono rounded-full p-3 tracking-widest self-center text-white text-center">
              Chat
            </button>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.0987628392472!2d-34.828922734623106!3d-7.114552621742576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd24fbb2d369%3A0x345c17bba26bf55b!2zVGFtYmHDuiwgSm_Do28gUGVzc29hIC0gUEI!5e0!3m2!1spt-BR!2sbr!4v1627688293962!5m2!1spt-BR!2sbr"
            style={{ width: `45vw`, height: `80vh`, margin: `2vw` }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
)

export default localizacao
