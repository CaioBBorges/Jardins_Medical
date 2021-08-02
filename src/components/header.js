import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Header() {
  return (
    <div class="flex flex-row justify-between w-full">
      <StaticImage
        src="../images/logo.svg"
        style={{ width: `14vw`, height: `16vw` }}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
      />
      <div style={{ paddingTop: `5vw`, paddingRight: `3vw` }}>
        <ul class="flex flex-row text-xl text-center text-white w-full place-items-center">
          <Link
            to="/"
            class="bg-green-dark font-mono rounded-full p-3"
            style={{
              marginRight: `3vw`,
              textAlign: "center",
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              letterSpacing: `0.1vw`,
            }}
            activeStyle={{
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              letterSpacing: `0.1vw`,
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `0.75rem`,
              width: `11vw`,
              borderRadius: `9999px`,
            }}
          >
            <li>INÍCIO</li>
          </Link>
          <Link
            to="/estrutura"
            class="bg-green-dark font-mono rounded-full p-3"
            style={{
              marginRight: `3vw`,
              textAlign: "center",

              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              letterSpacing: `0.1vw`,
            }}
            activeStyle={{
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              letterSpacing: `0.1vw`,
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `0.75rem`,
              width: `11vw`,
              borderRadius: `9999px`,
            }}
          >
            <li class="">ESTRUTURA</li>
          </Link>
          <Link
            to="/localizacao"
            class="bg-green-dark font-mono rounded-full p-3"
            style={{
              marginRight: `3vw`,
              textAlign: "center",

              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              letterSpacing: `0.1vw`,
            }}
            activeStyle={{
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              letterSpacing: `0.1vw`,
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `0.75rem`,
              width: `11vw`,
              borderRadius: `9999px`,
            }}
          >
            <li class="">LOCALIZAÇÃO</li>
          </Link>
          <Link
            to="/contato"
            class="bg-green-dark font-mono rounded-full p-3"
            style={{
              marginRight: `3vw`,
              textAlign: "center",
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              letterSpacing: `0.1vw`,
            }}
            activeStyle={{
              fontSize: `1.25vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              letterSpacing: `0.1vw`,
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `0.75rem`,
              width: `11vw`,
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
