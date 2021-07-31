import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import bg3 from "../images/bg3.png"
import ola1 from "../images/ola1.svg"
import inovador from "../images/inovador.svg"
import bg4 from "../images/bg4.png"
import Header from "../components/header"

const contato = () => (
  <div class=" ">
    <section
      class=" bg-local bg-no-repeat bg-top bg-cover bg-clip-border w-screen h-screen  place-content-center"
      style={{ backgroundImage: `url(${bg3})` , resize: `both`,
      overflow: `hidden`}}
    >
      <title>JARDINS</title>
      <link rel="icon" href="..\images\favicon.ico" />
      <Header/>
      <div class="">
        <h1 class="pt-36 px-30 text-left"
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
        <button class="bg-green-dark font-mono rounded-full p-3 tracking-widest  text-white text-center"
             style={{
              width: `467px`,
              height:` 51px`,
            }}        
        >
          Chat
        </button>
      </div>
    </section>
  </div>
)

export default contato
