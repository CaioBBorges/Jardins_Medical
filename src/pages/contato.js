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
      class="bg-cover bg-local bg-no-repeat	bg-clip-border h-full place-content-center"
      style={{ backgroundImage: `url(${inovador})` , resize: `both`,
      overflow: `hidden`}}
    >
      <title>JARDINS</title>
      <link rel="icon" href="..\images\favicon.ico" />
      <Header/>
      <div class="">
        <h1 class="pt-36 w-full text-8xl text-white font-mono font-thin text-center px-24 pb-100">
          ESTRUTURA PERFEITA PARA VOCÊ FOCAR NO QUE REALMENTE IMPORTA:<br/>SEU
          PACIENTE.
        </h1>
      </div>
    </section>
    <section class="grid grid-cols-2 w-full h-screen px-10 bg-gradient-to-tl from-gray-300 via-gray-50 to-gray-50 items-center">
      <div class="">
        <StaticImage src="../images/Mask Group.png" class="" quality={100} />
      </div>
      <div class="w">
        <h2 class="text-7xl md:text-5xl sm:text-4xl xs:text-4xl leading-relaxed tracking-widest font-mono text-black text-right">
          UM NOVO PADRÃO DE ATENDIMENTO MÉDICO
        </h2>
        <p class="text-2xl md:text-xl sm:text-sm xs:text-sm break-words mt-14 font-mono text-center">
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
      class="bg-cover bg-center bg-local bg-no-repeat	 grid grid-cols-2"
      style={{
        backgroundImage: `url(${bg3})`,
      }}
    >
      <div
        class="text-white font-mono col-2 grid grid-cols-4 grid-rows-5 col-start-2 -mt-6 p-6 mx-20 place-content-center	place-items-center flex-shrink"
        src="../images/inovador.svg"
        style={{
          backgroundImage: `url(${ola1})`,
          backgroundRepeat: `no-repeat`,
          height: `100vh`,
          weight: `10vw`,
          backgroundAttachment: `local`,
          backgroundSize: `100%`,
        }}
      >
        <h1 class="text-white text-5xl w-full col-span-4 p-5 text-justify">
          O QUE O JARDINS MEDICAL OFERECE PARA VOCÊ?
        </h1>
        <StaticImage
          src="../images/compass.png"
          quality={100}
          placeholder="blurred"
          layout="fixed"
        />
        <div class="text-white">
          <h1 class="text-lg font-mono">5635,26</h1>
          <h2 class="text-sm font-mono pt-2">PARA SALAS MEDICAS</h2>
        </div>
        <StaticImage
          src="../images/carro.png"
          quality={100}
          placeholder="blurred"
          layout="fixed"
          width={100}
          height={100}
        />
        <div class="text-white">
          <h1 class="text-lg font-mono">5 ANDARES DE ESTACIONAMENTO</h1>
          <h2 class="text-sm font-mono pt-2">
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
          <h1 class="text-lg font-mono"> MULTIPLAS ESPECIALIDADES MEDICAS</h1>
          <h2 class="text-sm font-mono pt-2">
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
          <h1 class="text-lg font-mono">RDC50</h1>
          <h2 class="text-sm font-mono pt-2">
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
          <h1 class="text-lg font-mono">ELEVADORES MODERNOS</h1>
          <h2 class="text-sm font-mono pt-2">
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
          <h1 class="text-lg font-mono">MINI SHOPPING</h1>
          <h2 class="text-sm font-mono pt-2">ESTRUTURA COMPLETA </h2>
        </div>
        <button class="col-span-4 bg-white rounded-full font-mono h-16 w-3/4 text-green-dark">
          RESERVE JÁ
        </button>
      </div>
    </section>
    <section
      class="bg-cover bg-center bg-no-repeat w-full h-5/6 align- justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${bg4})`,
      }}
    >
      <h1 class="text-white font-mono text-9xl text-justify font-thin	pt-80 w-full">
        A MELHOR <br /> EXPERIENCIA
      </h1>
      <button class="bg-green-dark rounded-full h-20 text-white w-1/3 text-center font-mono p-5 mt-5 mb-80">
        SAIBA MAIS
      </button>
    </section>
  </div>
)

export default contato
