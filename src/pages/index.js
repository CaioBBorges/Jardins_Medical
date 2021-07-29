import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <div class=" ">
    <section class="">
      <title>JARDINS</title>
      <link rel="icon" href="..\images\favicon.ico" />
      <StaticImage src="../images/inovador.svg" class="w-full z-0" />
      <div class="flex flex-row justify-between w-full z-10">
        <StaticImage
          class="z-10 w-40"
          src="../images/logo.svg"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
        />
        <div class="pt-12 pr-12 z-10 bg-transparent">
          <ul class="right-0 flex flex-row text-xl text-center text-white w-full space-x-10 place-items-center">
            <a href="#" class="bg-green-dark w-48 font-mono rounded-full p-4 tracking-widest">
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
      <div class="text-6xl leading-loose tracking-widest font-mono text-white pt-48 left-8 z-10">
        <h1 class="z-10">INOVADOR,</h1>
        <h1 class="z-10">SURPRENDENTE</h1>
        <h1 class="z-10">E TECNOLÓGICO</h1>
      </div>
      <div class=" justify-items-center px-20">
        <div
          class="px-5 right-96 grid grid-cols-4 w-full h-30  leading-loose tracking-widest text-white bg-green-dark divide-x
          divide-gray divide-opacity-25 rounded-xl text-center text-2xl font-mono z-10 justify-evenly"
        >
          <p class="p-5 z-10">SEDE EMPRESARIAL</p>
          <p class="p-5 z-10">ALTA RENTABILIDADE</p>
          <p class="p-5 z-10">VALORIZAÇÃO IMOBILIÁRIA</p>
          <p class="p-5 z-10">CONTRATOS ESTICADOS</p>
        </div>
      </div>
    </section>
    <section class="flex flex-row w-full -mt-5 px-10 h-screen bg-gradient-to-tl from-gray-100 to-gray-300 items-center">
      <div class="px-20">
        <StaticImage
          src="../images/Mask Group.png"
          class="z-20 w-full"
          quality={100}
        />
      </div>
      <div class="z-20">
        <h2 class="text-5xl leading-relaxed tracking-widest font-mono text-justify text-black z-20">
          UM NOVO PADRÃO DE ATENDIMENTO MÉDICO
        </h2>
        <p class="text-2xl text-justify break-words mt-14 font-mono z-20">
          O Jardins Medical traz um novo conceito de excelência, com espaços
          amplos de atendimento, localização privilegiada E arquitetura
          inovadora, Contará com profissionais que são referência em suas áreas.
          todo projeto busca o melhor resultado para o paciente, e também para o
          profissional de saúde. Estarão disponíveis para venda salas para uso
          exclusivo da área de saúde.
        </p>
      </div>
      <div>
        <StaticImage
          src="../images/in.png"
          class="w-full -mt-52 left-0 top-100 h-screen z-0"
        />
        <div class="text-white font-mono grid grid-cols-2 grid-rows-5  w-99 h-98 top-96 -ml-98 mt-98">
          <StaticImage
            src="../images/ola1.svg"
            class="grid grid-cols-2 grid-rows-5 h-98 w-98"
          />
          <h1 class="text-5xl w-full col-span-2 p-7">
            O QUE O JARDINS MEDICAL OFERECE PARA VOCÊ?
          </h1>
          <div class="flex flex-row">
            <StaticImage
              src="../images/compass.png"
              class="h-40 w-40 z-50"
            />
            <div></div>
          </div>
        </div>
      </div>
    </section>

    <section></section>
  </div>
)

export default IndexPage
