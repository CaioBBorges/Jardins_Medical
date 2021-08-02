import * as React from "react"
import bg3 from "../images/bg3.png"
import Header from "../components/header"

const contato = () => (
  <div class=" ">
    <section
      class=" bg-local bg-no-repeat bg-top bg-cover bg-clip-border w-screen h-screen  place-content-center"
      style={{
        backgroundImage: `url(${bg3})`,
        resize: `both`,
        overflow: `hidden`,
      }}
    >
      <title>JARDINS</title>
      <link rel="icon" href="..\images\favicon.ico" />
      <Header />
      <div class="">
        <h1
          class="pt-36 px-30 text-left"
          style={{
            fontSize: `55px`,
            lineHeight: `171.2%`,
            letterSpacing: `0.63em`,
            color: `#FFFFFF`,
          }}
        >
          FALE <br /> CONOSCO
        </h1>
      </div>
      <div class="pt-5 px-30">
        <button
          class="bg-green-dark font-mono rounded-full p-3 tracking-widest  text-white text-center"
          style={{
            width: `467px`,
            height: ` 51px`,
          }}
        >
          Chat
        </button>
      </div>
      <form action="acao mandar mensagem" method="post">
        <div>
          <label
            style={{
              fontSize: `36px`,
              lineHeight: `171.2%`,
              textAlign: `center`,
              letterSpacing: `0.63em`,
              color: `#FFFFFF`,
              textShadow: `0px 4px 12px rgba(0, 0, 0, 0.25), 0px 4px 16px rgba(0, 0, 0, 0.8), 4px 9px 46px rgba(0, 0, 0, 0.8)`,
            }}
            for="name"
          >
            Nome
          </label>
          <input type="text" id="name" />
        </div>
        <div>
          <label
            style={{
              fontSize: `36px`,
              lineHeight: `171.2%`,
              textAlign: `center`,
              letterSpacing: `0.63em`,
              color: `#FFFFFF`,
              textShadow: `0px 4px 12px rgba(0, 0, 0, 0.25), 0px 4px 16px rgba(0, 0, 0, 0.8), 4px 9px 46px rgba(0, 0, 0, 0.8)`,
            }}
            for="phone"
          >
            Telefone
          </label>
          <input type="phone" id="phone" />
        </div>
        <div>
          <label
            style={{
              fontSize: `36px`,
              lineHeight: `171.2%`,
              textAlign: `center`,
              letterSpacing: `0.63em`,
              color: `#FFFFFF`,
              textShadow: `0px 4px 12px rgba(0, 0, 0, 0.25), 0px 4px 16px rgba(0, 0, 0, 0.8), 4px 9px 46px rgba(0, 0, 0, 0.8)`,
            }}
            for="mail"
          >
            E-mail
          </label>
          <input type="email" id="mail" />
        </div>
        <div>
          <label
            style={{
              fontSize: `36px`,
              lineHeight: `171.2%`,
              textAlign: `center`,
              letterSpacing: `0.63em`,
              color: `#FFFFFF`,
              textShadow: `0px 4px 12px rgba(0, 0, 0, 0.25), 0px 4px 16px rgba(0, 0, 0, 0.8), 4px 9px 46px rgba(0, 0, 0, 0.8)`,
            }}
            for="msg"
          >
            Mensagem
          </label>
          <textarea id="msg"></textarea>
        </div>
        <div class="button">
          <button
            style={{
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `20vw`,
              letterSpacing: `0.1vw`,
              color: `#ffffff`,
              backgroundColor: `#033415`,
              padding: `0.75rem`,
              borderRadius: `9999px`,
            }}
            type="submit"
          >
            Enviar sua mensagem
          </button>
        </div>
      </form>
    </section>
  </div>
)

export default contato
