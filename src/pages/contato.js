import * as React from "react"
import bg3 from "../images/bg3.png"
import Header from "../components/header"

const contato = () => (
  <div class="">
    <section
      class=" bg-local bg-no-repeat bg-top bg-cover bg-clip-border w-screen h-screen  place-content-center"
      style={{ backgroundImage: `url(${bg3})` , resize: `both`,
      overflow: `hidden`}}
    >
      <title>JARDINS</title>
      <link rel="icon" href="..\images\favicon.ico" />
      <Header/>
      <div class="grid grid-cols-2">
        <div>
          <div class=" py-20">
              <h1 class="text-center"
                style={{
                  fontSize: `4vw`,
                  lineHeight: `171.2%`,
                  letterSpacing: `0.63em`,
                  color: `#FFFFFF`,
                }}   
              >
              FALE <br /> CONOSCO
              </h1>
            </div>
            <div class="text-center">
              <button class="bg-green-dark font-mono rounded-full p-3 tracking-widest  text-white text-center"
                  style={{
                    width: `30vw`,
                    height:` 6vh`,
                  }}        
              >
                Chat
              </button>
            </div>
        </div>
      </div>
    </section>
  </div>
)

export default contato
