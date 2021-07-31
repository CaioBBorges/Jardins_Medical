import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Header() {
  return (
    <div class="flex flex-row justify-between w-full">
      <StaticImage
        class="w-56"
        src="../images/logo.svg"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
      />
      <div class="pt-12 pr-12">
        <ul class="right-0 flex flex-row text-xl text-center text-white w-full space-x-10 sm:space-x-8 xs:space-x-6 place-items-center">
          <Link
            to="/"
            class="bg-green-dark w-48 font-mono tracking-widest rounded-full p-3"
            activeStyle={{
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `0.75rem`,
              width: `12rem`,
              borderRadius: `9999px`,
            }}
          >
            <li class="">INÍCIO</li>
          </Link>
          <Link
            to="/estrutura"
            class="bg-green-dark w-48 font-mono tracking-widest rounded-full p-3"
            activeStyle={{
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `0.75rem`,
              width: `12rem`,
              borderRadius: `9999px`,
            }}
          >
            <li class="">ESTRUTURA</li>
          </Link>
          <Link
            to="/localizacao"
            class="bg-green-dark w-48 font-mono tracking-widest rounded-full p-3"
            activeStyle={{
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `0.75rem`,
              width: `12rem`,
              borderRadius: `9999px`,
            }}
          >
            <li class="">LOCALIZAÇÃO</li>
          </Link>
          <Link
            to="/contato"
            class="bg-green-dark w-48 tracking-widest font-mono rounded-full p-3"
            activeStyle={{
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `0.75rem`,
              width: `12rem`,
              borderRadius: `9999px`,
            }}
          >
            <li class="">CONTATOS</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
