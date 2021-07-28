import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <div class="">
    <section class="h-screen">
      <title>JARDINS</title>
      <link rel="icon" href="/favicon.ico" />
      <StaticImage
        src="../images/inovador.svg"
        class="w-screen absolute bg-cover"
      />
      <div class="absolute flex flex-row justify-between w-full">
        <div class="w-40">
          <StaticImage
            src="../images/logo.svg"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
          />
        </div>
        <div class="pt-5 pr-5">
          <ul class="right-0 flex flex-row text-xl text-center text-white w-full space-x-3 place-items-center">
            <a href="#" class="bg-green-900 rounded-full p-5">
              <li class="">INÍCIO</li>
            </a>
            <a href="#" class="bg-green-900 rounded-full p-5">
              <li class="">ESTRUTURA</li>
            </a>
            <a href="#" class="bg-green-900 rounded-full p-5">
              <li class="">LOCALIZAÇÃO</li>
            </a>
            <a href="#" class="bg-green-900 rounded-full p-5">
              <li class="">CONTATOS</li>
            </a>
          </ul>
        </div>
      </div>
      <div class="absolute text-5xl leading-loose tracking-widest text-white pt-72 left-8">
        <h1>INOVADOR,</h1>
        <h1>SURPRENDENTE</h1>
        <h1>E TECNOLÓGICO</h1>
      </div>
      <div class="absolute bottom-0 justify-items-center w-full px-5">
        <div
          class="px-5 flex flex-row leading-loose tracking-widest text-white bg-green-900 divide-x
        divide-gray divide-opacity-25 rounded-xl text-base text-center justify-items-center"
        >
          <p class="p-5">SEDE EMPRESARIAL</p>
          <p class="p-5">ALTA RENTABILIDADEL</p>
          <p class="p-5">VALORIZAÇÃO IMOBILIÁRIA</p>
          <p class="p-5">CONTRATOS ESTICADOS</p>
        </div>
      </div>
    </section>
    <section class="absolute flex flex-row w-full px-10 h-screen bg-gradient-to-r from-gray-100 to-gray-200 items-center">
      <div class="px-20">
        <StaticImage
          src="../images/Mask Group.png"
          class=""
          width={2500}
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="A Gatsby astronaut"
        />
      </div>
      <div class="">
        <h2 class="text-5xl leading-relaxed tracking-widest text-justify text-black">
          UM NOVO PADRÃO DE ATENDIMENTO MÉDICO
        </h2>
        <p class="text-2xl text-justify break-words mt-14">
          O Jardins Medical traz um novo conceito de excelência, com espaços
          amplos de atendimento, localização privilegiada E arquitetura
          inovadora, Contará com profissionais que são referência em suas áreas.
          todo projeto busca o melhor resultado para o paciente, e também para o
          profissional de saúde. Estarão disponíveis para venda salas para uso
          exclusivo da área de saúde.
        </p>
      </div>
    </section>
  </div>
)

export default IndexPage
