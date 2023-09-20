import gsap, { Expo } from "gsap"
import Link from "next/link"

const Navigation = () => {
  const handleOpenMenu = () => {
    gsap.to('.navigation-content', 1.5, { y: 0, ease: Expo.easeInOut })
    gsap.to('.navigation-content ul li', 1, { opacity: 1, delay: 1, stagger: .1 })
    gsap.to('.navigation-content .opacity', .5, { opacity: 1, stagger: .1, delay: 1 })
    if (document.querySelector('.fade-up')) {
      gsap.to('.fade-up', 1, { backdropFilter: 'blur(0px)', delay: 1 });
    }
  }
  return (
    <div className="navigation">
      <div className="logo hover ">
        <Link href="#" className="text uppercase">Pokemon world</Link>
      </div>
      <div className="menu-bar hover ">
        <div className="menu-bar-name text" onClick={() => handleOpenMenu()}>
          Menu
        </div>
        <div className="menu-bar-lines text">
          <div className="menu-bar-line"></div>
          <div className="menu-bar-line"></div>
        </div>
      </div>
    </div>
  )
}

export default Navigation