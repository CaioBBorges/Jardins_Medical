import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Footer() {
  return (
    <footer
      style={{
        display: `flex`,
        flexDirection: `row`,
        placeSelf: `center`,
        width: `100%`,
        justifyContent: `space-around`,
        padding: `2rem`,
        backgroundImage: `linear-gradient(to right, #d1d5db, #ffffff )`,
      }}
    >
      <a href="#">
        <StaticImage
          src="../images/face.svg"
          quality={100}
          placeholder="blurred"
          layout="fixed"
        />
      </a>
      <a href="#">
        <StaticImage
          src="../images/tt.svg"
          quality={100}
          placeholder="blurred"
          layout="fixed"
        />
      </a>
      <a href="#">
        <StaticImage
          src="../images/insta.svg"
          quality={100}
          placeholder="blurred"
          layout="fixed"
        />
      </a>
      <a href="#">
        <StaticImage
          src="../images/linkedin.svg"
          quality={100}
          placeholder="blurred"
          layout="fixed"
        />
      </a>
      <a href="#">
        <StaticImage
          src="../images/youtube.svg"
          quality={100}
          placeholder="blurred"
          layout="fixed"
        />
      </a>
    </footer>
  )
}

export default Footer
