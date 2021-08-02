import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Header() {
  return (
    <div class="flex flex-row justify-between w-full">
      <StaticImage
        class="w-56"
        src="../images/logo.svg"
        style={{ width: `16vw` }}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
      />
      <div class="pt-12 pr-12">
        <ul class="flex flex-row text-xl text-center text-white w-full space-x-10 sm:space-x-8 xs:space-x-6 place-items-center">
          <Link
            to="/"
            class="bg-green-dark font-mono rounded-full p-3"
            style={{
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `10vw`,
              letterSpacing: `0.1vw`,
            }}
            activeStyle={{
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `10vw`,
              letterSpacing: `0.1vw`,
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `0.75rem`,
              width: `10vw`,
              borderRadius: `9999px`,
            }}
          >
            <li>INÍCIO</li>
          </Link>
          <Link
            to="/estrutura"
            class="bg-green-dark font-mono rounded-full p-3"
            style={{
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `10vw`,
              letterSpacing: `0.1vw`,
            }}
            activeStyle={{
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `10vw`,
              letterSpacing: `0.1vw`,
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `0.75rem`,
              width: `10vw`,
              borderRadius: `9999px`,
            }}
          >
            <li class="">ESTRUTURA</li>
          </Link>
          <Link
            to="/localizacao"
            class="bg-green-dark font-mono rounded-full p-3"
            style={{
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `10vw`,
              letterSpacing: `0.1vw`,
            }}
            activeStyle={{
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `10vw`,
              letterSpacing: `0.1vw`,
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `0.75rem`,
              width: `10vw`,
              borderRadius: `9999px`,
            }}
          >
            <li class="">LOCALIZAÇÃO</li>
          </Link>
          <Link
            to="/contato"
            class="bg-green-dark font-mono rounded-full p-3"
            style={{
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `10vw`,
              letterSpacing: `0.1vw`,
            }}
            activeStyle={{
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `10vw`,
              letterSpacing: `0.1vw`,
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `0.75rem`,
              width: `10vw`,
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
