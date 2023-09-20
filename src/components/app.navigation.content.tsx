import gsap, { Expo } from "gsap"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const NavigationContent = () => {

  const [bgImage, setBgImage] = useState('')

  const handleMouseOver = (e: any) => {
    gsap.to('.project-preview', 1, { width: '200px', ease: Expo.easeInOut })
    var img = e.target.dataset.img;
    setBgImage(img)
  }
  const handleMouseOut = () => {
    gsap.to('.project-preview', 1, { width: '0px', ease: Expo.easeInOut })
    setBgImage('')
  }

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
  console.log('>>>>>>', bgImage)
  return (
    <div className="navigation-content" onMouseMove={(e) => handleMouseMove(e)}>
      <div className="navigation-logo hover opacity">
        <Link href="#" className="text"
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={handleMouseOut}>
          ARLO BROWN
        </Link>
      </div>
      <ul className="navigation-ul">
        <li>
          <Link href="index-one.html"
            data-text="Home"
            data-img="/images/bg-image-three.jpg"
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseOut={handleMouseOut}>
            Home
          </Link>
        </li>
        <li>
          <Link href="about-one.html"
            data-text="About"
            data-img="/images/about-img.jpg"
            onMouseOver={(e) => handleMouseOver(e)}>
            About
          </Link>
        </li>
        <li>
          <Link href="songs-one.html"
            data-text="Songs"
            data-img="/images/album-thumbnail-nine.jpg"
            onMouseOver={(e) => handleMouseOver(e)}>
            Songs
          </Link>
        </li>
        <li>
          <Link href="blog-one.html"
            data-text="Blogs"
            data-img="/images/main-bg-three.jpg"
            onMouseOver={(e) => handleMouseOver(e)}>
            Blogs
          </Link>
        </li>
        <li>
          <Link href="contact-one.html"
            data-text="Contact"
            data-img="images/album-thumbnail-four.jpg"
            onMouseOver={(e) => handleMouseOver(e)}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="navigation-close hover about-close opacity" onClick={handleClose}>
        <div className="navigation-close-line"></div>
        <div className="navigation-close-line"></div>
      </div>
      <div className="project-preview" style={{ backgroundImage: `url(${bgImage}) `, backgroundColor: 'white' }}></div>
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