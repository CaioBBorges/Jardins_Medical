import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Header() {
  return (
    <div
      style={{ display: `flex`, flexDirection: `row` }}
      class="flex flex-row justify-between w-full"
    >
      <StaticImage
        src="../images/logo.svg"
        style={{ width: `14vw`, height: `16vw` }}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
      />
      <div style={{ paddingTop: `5vw`, paddingRight: `3vw` }}>
        <ul style={{display:'flex',flexDirection:'row',textAlign:"center",width:`100%`,placeItems:`center`}}>
          <Link
            to="/"
            style={{
              padding:`1vw`,
              backgroundColor: `#033415`,
              marginRight: `3vw`,
              textAlign: "center",
              fontSize: `1vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              padding: `1vw`,
              borderRadius:`9999px`,
              letterSpacing: `0.1vw`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              color: `#ffffff`,
            }}
            activeStyle={{
              fontSize: `1vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              textAlign: "center",
              letterSpacing: `0.1vw`,
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `1vw`,
              width: `11vw`,
              borderRadius: `9999px`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              marginRight: `3vw`,
            }}
          >
            <li>INÍCIO</li>
          </Link>
          <Link
            to="/estrutura"
            style={{
              padding:`1vw`,
              backgroundColor: `#033415`,
              marginRight: `3vw`,
              textAlign: "center",
              fontSize: `1vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              padding: `1vw`,
              borderRadius:`9999px`,
              letterSpacing: `0.1vw`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              color: `#ffffff`,
            }}
            activeStyle={{
              fontSize: `1vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              textAlign: "center",
              letterSpacing: `0.1vw`,
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `1vw`,
              width: `11vw`,
              borderRadius: `9999px`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              marginRight: `3vw`,
            }}
          >
            <li class="">ESTRUTURA</li>
          </Link>
          <Link
            to="/localizacao"
            style={{
              padding:`1vw`,
              backgroundColor: `#033415`,
              marginRight: `3vw`,
              textAlign: "center",
              fontSize: `1vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              padding: `1vw`,
              borderRadius:`9999px`,
              letterSpacing: `0.1vw`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              color: `#ffffff`,
            }}
            activeStyle={{
              fontSize: `1vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              textAlign: "center",
              letterSpacing: `0.1vw`,
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `1vw`,
              width: `11vw`,
              borderRadius: `9999px`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              marginRight: `3vw`,
            }}
          >
            <li class="">LOCALIZAÇÃO</li>
          </Link>
          <Link
            to="/contato"
            style={{
              padding:`1vw`,
              backgroundColor: `#033415`,
              marginRight: `3vw`,
              textAlign: "center",
              fontSize: `1vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              padding: `1vw`,
              borderRadius:`9999px`,
              letterSpacing: `0.1vw`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              color: `#ffffff`,
            }}
            activeStyle={{
              fontSize: `1vw`,
              lineHeight: `1.75vw`,
              width: `11vw`,
              textAlign: "center",
              letterSpacing: `0.1vw`,
              color: `#033415`,
              backgroundColor: `#ffffff`,
              padding: `1vw`,
              width: `11vw`,
              borderRadius: `9999px`,
              fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
              marginRight: `3vw`,
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
