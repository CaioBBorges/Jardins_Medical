import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Footer() {
  return (
    <footer class="bg-cover py-5 grid grid-cols-5 h-28 justify-between place-items-center bg-gradient-to-tl from-white via-white to-gray-300">
      <a href="#">
        <div class="">
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
  )
}

export default Footer
