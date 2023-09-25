import gsap, { Expo } from "gsap"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"


interface IProps {
  cursorHover: () => void
  cursorNormal: () => void
}

const NavigationContent = (props: IProps) => {
  const { cursorHover, cursorNormal } = props
  const [bgImage, setBgImage] = useState('')

  const handleMouseOver = (e: any) => {
    var img = e.target.dataset.img;
    cursorHover()
    setBgImage(img)
    console.log("file: app.navigation.content.tsx:20 >>> handleMouseOver >>> img:", img)
    console.log("file: app.navigation.content.tsx:20 >>> handleMouseOver >>> bgImage:", bgImage)
    gsap.to('.navigation-content', 1, { backgroundImage: `url(${img})`, ease: Expo.easeInOut })
  }
  const handleMouseLeave = () => {
    gsap.to('.navigation-content', 1, { backgroundImage: 'initial', ease: Expo.easeInOut })
    // setBgImage('')
    cursorNormal()
  }
  useEffect(()=>{
    handleMouseOver
    handleMouseLeave
  },[bgImage])
  const handleClose = () => {
    gsap.to('.navigation-content ul li', .5, { opacity: 0, stagger: -.1 })
    gsap.to('.navigation-content .opacity', .5, { opacity: 0, stagger: .1 })
    gsap.to('.navigation-content', 1.5, { y: '100%', ease: Expo.easeInOut, delay: .2 })
    if (document.querySelector('.fade-up')) {
      gsap.to('.fade-up', 1, { backdropFilter: 'blur(20px)', delay: .5 });
    }
  }
  const handleMouseMove = (e: any) => {
    gsap.to('.project-preview', {
      x: e.clientX,
      y: e.clientY,
    })
  }
  return (
    <div className="navigation-content" style={{ backgroundImage: `url(${bgImage}) ` }} onMouseMove={(e) => handleMouseMove(e)}>
      <div className="navigation-logo hover opacity-0">
        <Link href="/" className="text"
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseLeave={handleMouseLeave}>
          ARLO BROWN
        </Link>
      </div>
      <ul className="navigation-ul">
        <li>
          <Link href="index-one.html"
            data-text="Home"
            data-img="/images/bg-image-three.jpg"
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseLeave={handleMouseLeave}>
            Home
          </Link>
        </li>
        <li>
          <Link href="about-one.html"
            data-text="About"
            data-img="/images/about-img.jpg"
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseLeave={handleMouseLeave}
          >
            About
          </Link>
        </li>
        <li>
          <Link href="songs-one.html"
            data-text="Songs"
            data-img="/images/album-thumbnail-nine.jpg"
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseLeave={handleMouseLeave}
          >
            Songs
          </Link>
        </li>
        <li>
          <Link href="blog-one.html"
            data-text="Blogs"
            data-img="/images/main-bg-three.jpg"
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseLeave={handleMouseLeave}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link href="contact-one.html"
            data-text="Contact"
            data-img="images/album-thumbnail-four.jpg"
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseLeave={handleMouseLeave}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="navigation-close hover about-close opacity"
        onClick={handleClose}
        onMouseOver={(e) => handleMouseOver(e)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="navigation-close-line"></div>
        <div className="navigation-close-line"></div>
      </div>
      <div className="headphone-navigation opacity">
        <Image src="/images/headphone.png" width={100} height={100} title="headphone zone" className="text" alt="headphone" />
      </div>
      <div className="social-media-links-navigation">
        <ul>
          <li><Link href="#" className="text hover opacity">YT</Link></li>
          <li><Link href="#" className="text hover opacity">FB</Link></li>
          <li><Link href="#" className="text hover opacity">IG</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationContent