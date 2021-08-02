import * as React from "react"
import lobby from "../images/lobby.png"
import Header from "../components/header"
import tablet from "../images/tablet.png"

const localizacao = () => (
  <div class=" ">
    <title>JARDINS</title>
    <link rel="icon" href="..\images\favicon.ico" />
    <section
      class="bg-cover bg-local h-full"
      style={{
        backgroundImage: `url(${lobby})`,
      }}
    >
      <Header />
      <div class="grid grid-cols-2 justify-between place-items-center w-full px-20 pb-48">
        <div class="">
          <h1
            class=" text-white font-mono text-center pt-20"
            style={{
              paddingTop:`20vh`,
              fontSize: `40px`,
              lineHeight: `171.2%`,
              letterSpacing: `0.63em`,
              color: `#FFFFFF`,
              textShadow: `8px 13px 17px rgba(0, 0, 0, 0.55)`,
            }}
          >
            ONDE ESTAMOS?
          </h1>
          <p
            class="pt-20 text-white font-mono text-center"
            style={{
              fontSize: `20px`,
              lineHeight: `171.2%`,
              letterSpacing: `0.63em`,
              color: `#FFFFFF`,
              textShadow: `8px 13px 17px rgba(0, 0, 0, 0.55)`,
            }}
          >
            ESTAMOS LOCALIZADOS NO BAIRRO DOS EXPETICIONÁROS
          </p>
          <div class="w-full flex justify-center pt-20 pb-40">
            <button class="bg-green-dark w-4/6 font-mono rounded-full p-3 tracking-widest self-center text-white text-center">
              Chat
            </button>
          </div>
        </div>
        <div
          class="bg-cover w-full flex"
          style={{
            backgroundImage: `url(${tablet})`,
            top: `0px`
          }}
        >
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.0987628392472!2d-34.828922734623106!3d-7.114552621742576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd24fbb2d369%3A0x345c17bba26bf55b!2zVGFtYmHDuiwgSm_Do28gUGVzc29hIC0gUEI!5e0!3m2!1spt-BR!2sbr!4v1627688293962!5m2!1spt-BR!2sbr"
              style={{ width: `50rem`, height: `31rem`, margin: `2.5rem` }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default localizacao
