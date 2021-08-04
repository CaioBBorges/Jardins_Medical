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
      borderRadius: `2rem`,
      width: `100%`,
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`,
    }}

    class="bg-gradient-to-tl from-white via-white to-gray-300">
      <a href="#">
          <StaticImage
            src="../images/face.svg"
            quality={100}
            style={{
              placeSelf: `center`,
              margin: `5vw`,
            }}
            placeholder="blurred"
            layout="fixed"
          />
      </a>
      <a href="#">
          <StaticImage
            src="../images/tt.svg"
            quality={100}
            style={{
              placeSelf: `center`,
              margin: `5vw`,
            }}
            placeholder="blurred"
            layout="fixed"
          />
      </a>
      <a href="#">
          <StaticImage
            src="../images/insta.svg"
            quality={100}
            style={{
              placeSelf: `center`,
              margin: `5vw`,
            }}
            placeholder="blurred"
            layout="fixed"
          />
      </a>
      <a href="#">
          <StaticImage
            src="../images/linkedin.svg"
            quality={100}
            style={{
              placeSelf: `center`,
              margin: `5vw`,
            }}
            placeholder="blurred"
            layout="fixed"
          />
      </a>
      <a href="#">
          <StaticImage
            src="../images/youtube.svg"
            quality={100}
            style={{
              placeSelf: `center`,
              margin: `5vw`,
            }}
            placeholder="blurred"
            layout="fixed"
          />
      </a>
    </footer>
  )
}

export default Footer
