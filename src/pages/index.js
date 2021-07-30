import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import bg3 from "../images/bg3.png"
import ola1 from "../images/ola1.svg"
import inovador from "../images/inovador.svg"
import bg4 from "../images/bg4.png"
import auditorio from "../images/auditorio.png"
import lobby from "../images/lobby.png" 
import rooftop from "../images/rooftop.png"
import branco from "../images/branco.png"
import footer from "../images/footer.png"



const IndexPage = () => (
  <div class=" ">
    <section
      class="bg-cover bg-local bg-no-repeat	bg-clip-border"
      style={{ backgroundImage: `url(${inovador})` }}
    >
      <title>JARDINS</title>
      <link rel="icon" href="..\images\favicon.ico" />
      <div class="h-screen">
        <div class="flex flex-row justify-between w-full"
        >
          <StaticImage
            class="w-56"
            src="../images/logo.svg"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
          <div class="pt-12 pr-12">
            <ul class="right-0 flex flex-row text-xl text-center text-white w-full space-x-10 sm:space-x-8 xs:space-x-6 place-items-center">
              <a
                href="#"
                class="bg-green-dark w-48 font-mono rounded-full p-4 tracking-widest"
              >
                <li class="">INÍCIO</li>
              </a>
              <a
                href="#"
                class="bg-green-dark w-48 font-mono tracking-widest rounded-full p-4"
              >
                <li class="">ESTRUTURA</li>
              </a>
              <a
                href="#"
                class="bg-green-dark w-48 font-mono tracking-widest rounded-full p-4"
              >
                <li class="">LOCALIZAÇÃO</li>
              </a>
              <a
                href="#"
                class="bg-green-dark w-48 tracking-widest font-mono rounded-full p-4"
              >
                <li class="">CONTATOS</li>
              </a>
            </ul>
          </div>
        </div>
        <div class="pt-48 left-20 w-4/6">
          <div class="text-6xl ml-44 leading-relaxed tracking-widest font-mono text-justify text-white ">
            <h1 class="text-justify	">INOVADOR,</h1>
            <h1 class="text-justify	">SURPRENDENTE</h1>
            <h1 class="text-justify	">E TECNOLÓGICO</h1>
          </div>
        </div>
        <div class="justify-items-center px-20 absolute -bottom-14 items-center">
          <div
            class="px-5 grid grid-cols-4 w-full h-30 leading-loose tracking-widest text-white bg-green-dark divide-x
          divide-green-500 divide-opacity-25 ml-24 divide-2 rounded-xl text-center text-2xl font-mono justify-evenly items-center"
          >
            <p class="">SEDE EMPRESARIAL</p>
            <p class="">ALTA RENTABILIDADE</p>
            <p class="">VALORIZAÇÃO IMOBILIÁRIA</p>
            <p class="">CONTRATOS ESTICADOS</p>
          </div>
        </div>
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
      class="bg-cover bg-center bg-no-repeat w-full h-5/6  justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${bg4})`,
      }}
    >
      <h1 class="text-white font-mono leading-relaxed tracking-widest text-9xl text-center font-thin	pt-80 w-full">
        A MELHOR <br /> EXPERIÊNCIA
      </h1>
      <div class=" ml-64">
        <button class="bg-green-dark ml-96 rounded-full h-20 text-white w-1/3 text-center font-mono p-5 mt-5 mb-80">
          SAIBA MAIS
        </button>
      </div>
    </section>
    <section 
      class="bg-cover bg-center bg-no-repeat w-full h-101 align- justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${lobby})`,
      }}> 
      <h1 class="text-white font-mono leading-relaxed tracking-widest text-9xl text-center font-thin pt-60 w-full">
        LOBBY
      </h1>
      <p class=" text-center text-white font-bold text-3xl font-mono leading-relaxed  tracking-widest ">LUXUOSO LOBBY PARA PRESERVAR O ATENDENDIMENTO</p>
    </section>
    <section 
      class="bg-cover bg-center bg-no-repeat w-full h-101 justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${rooftop})`,
      }}> 
      <h1 class="text-white font-mono leading-relaxed tracking-widest text-9xl px-12 font-thin pt-60 w-full">
      ROOFTOP
      </h1>
      <p class="  text-white font-bold text-3xl font-mono leading-relaxed px-14 tracking-widest ">CONCEITO ARQUITETÔNICO PARA PROPORCIONAR MAIS <br /> QUALIDADE E CONFORTO COM UMA ÁREA DE EVENTOS</p>
    </section>
    <section 
      class="bg-cover bg-center bg-no-repeat w-full h-101 align- justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${auditorio})`,
      }}> 
      <h1 class="text-white px-12 font-mono  tracking-widest text-9xl text-right font-thin pt-40  w-full">
      AUDITÓRIO <br /> PRINCIPAL
      </h1>
      <p class=" text-right px-14 text-white font-bold text-3xl font-mono leading-relaxed  tracking-widest ">AUDOTÓTIO PARA 100 LUGARES , ONDE HAVERÃO <br /> EVENTOS PERIÓDICOS DA SAÚDE , TRAZENDO A JOÃO <br /> PESSOA UM LOCAL DE CAPACITAÇÃO E APRIMORAMENTO</p>
    </section>
    <section 
      class="bg-cover bg-center bg-no-repeat w-full h-101 align- justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${branco})`,
      }}> 
      <h1 class=" text-black px-12 font-mono text-center leading-relaxed  tracking-widest text-6xl font-thin pt-10  w-full">
      100% ADEQUADO <br /> AS EXIGÊNCIAS <br /> DOS ORGÃOS <br /> REGULADORES
      </h1>
      <div class="grid grid-cols-3 ml-96 py-8 bg-green-dark w-100 h-44 rounded-lg ">
        <div class=" ml-36">
            <StaticImage
                src="../images/anvisa.svg"
                quality={100}
                placeholder="blurred"
                layout="fixed"
              />     
          </div>
          <div class=" ml-36">
            <StaticImage
                src="../images/logo-abnt.svg"
                quality={100}
                placeholder="blurred"
                layout="fixed"
              />     
          </div>
          <div class=" ml-36">
            <StaticImage
                src="../images/ans.svg"
                quality={100}
                placeholder="blurred"
                layout="fixed"
              />     
          </div>
      </div>   
    </section >
    <footer 
      class="bg-cover space-x-28 py-5 grid grid-cols-5 h-28 bg-center bg-no-repeat  justify-center bg-clip-border"
      style={{
      backgroundImage: `url(${footer})`,
      }}> 
      <a href="#">
        <div class=" ml-36">
          <StaticImage
              src="../images/face.svg"
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />     
        </div>
      </a>
      <a href="#">
        <div>
          <StaticImage
            src="../images/tt.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </a>
      <a href="#">
        <div>
          <StaticImage
            src="../images/insta.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </a>
      <a href="#">    
        <div>
        <StaticImage
            src="../images/linkedin.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />  
        </div> 
      </a>
      <a href="#">     
        <div> 
          <StaticImage
            src="../images/youtube.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </a>    

    </footer>
  </div>
)

export default IndexPage
