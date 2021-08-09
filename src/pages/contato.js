import * as React from "react"
import bg3 from "../images/bg3.png"
import Header from "../components/header"

const contato = () => (
  <div class="">
    <section
      class=" bg-local bg-no-repeat bg-top bg-cover bg-clip-border place-content-center"
      style={{
        backgroundImage: `url(${bg3})`,
        resize: `both`,
        overflow: `hidden`,
      }}
    >
      <title>JARDINS</title>
      <link rel="icon" href="..\images\favicon.ico" />
      <Header />
      <div class="grid grid-cols-2">
        <div>
          <div class=" py-20">
            <h1
              class="text-center"
              style={{
                fontSize: `4vw`,
                lineHeight: `171.2%`,
                letterSpacing: `0.63em`,
                color: `#FFFFFF`,
                textAlign: `center`,
                textShadow: `0px 4px 12px rgba(0, 0, 0, 0.25), 0px 4px 16px rgba(0, 0, 0, 0.8), 4px 9px 46px rgba(0, 0, 0, 0.8)`,
              }}
            >
              FALE <br /> CONOSCO
            </h1>
          </div>
          <div class="text-center">
            <button
              class="bg-green-dark font-mono rounded-full p-3 tracking-widest  text-white text-center"
              style={{
                width: `30vw`,
                height: `6vh`,
              }}
            >
              Chat
            </button>
          </div>
        </div>
        <form
          style={{
            paddingRight: `2vw`,
            paddingLeft: `2vw`,
            display: `flex`,
            flexDirection: `column`,
          }}
          action="acao mandar mensagem"
          method="post"
        >
          <div class="flex flex-col">
            <label
              style={{
                paddingTop: `3vw`,
                borderRadius: `9999px`,
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
            <input
              style={{
                textAlign: `center`,
                paddingTop: `3vw`,
                borderRadius: `9999px`,
              }}
              type="text"
              id="name"
            />
          </div>
          <div class="flex flex-col">
            <label
              style={{
                paddingTop: `3vw`,
                borderRadius: `9999px`,
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
            <input
              style={{
                paddingTop: `3vw`,
                borderRadius: `9999px`,
                textAlign: `center`,
              }}
              type="phone"
              id="phone"
            />
          </div>
          <div class="flex flex-col">
            <label
              style={{
                paddingTop: `3vw`,
                borderRadius: `9999px`,
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
            <input
              style={{
                paddingTop: `3vw`,
                borderRadius: `9999px`,
                textAlign: `center`,
              }}
              type="email"
              id="mail"
            />
          </div>
          <div class="flex flex-col">
            <label
              style={{
                paddingTop: `3vw`,
                borderRadius: `9999px`,
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
            <textarea
              style={{
                paddingTop: `3vw`,
                paddingBottom: `3vw`,
                borderRadius: `2rem`,
                textAlign: `center`,
                height: `20vh`,
              }}
              id="msg"
            ></textarea>
          </div>
          <button
            class="bg-green-dark font-mono rounded-full p-3 tracking-widest text-white text-center"
            style={{
              width: `30vw`,
              height: `6vh`,
              marginTop: `3vw`,
              marginBottom: `10vw`,
              alignSelf: `center`,
            }}
            type="submit"
          >
            Enviar sua mensagem
          </button>
        </form>
      </div>
    </section>
  </div>
)

export default contato
