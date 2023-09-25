'use client'

import Navigation from "@/components/app.navigation"
import NavigationContent from "@/components/app.navigation.content"
import Social from "@/components/app.social.link"
import gsap from "gsap"
import { Expo } from "gsap"
import Image from "next/image"
import { useLayoutEffect } from "react"

const Home = () => {
  const cursor = '.cursor'
  const pointer = '.pointer'
  useLayoutEffect(() => {

    const setX = gsap.quickTo(cursor, "x", {
      duration: 0.5,
      ease: Expo.easeOut,
    })

    const setY = gsap.quickTo(cursor, "y", {
      duration: 0.5,
      ease: Expo.easeOut,
    })

    const setX2 = gsap.quickTo(pointer, "x", {
      duration: 0.5,
      ease: Expo.easeOut,
    })

    const setY2 = gsap.quickTo(pointer, "y", {
      duration: 0.5,
      ease: Expo.easeOut,
    })


    document.addEventListener("mousemove", (e) => {
      setX(e.clientX);
      setY(e.clientY);
      setX2(e.clientX);
      setY2(e.clientY);
    })

  }, [])
  const cursorHover = () => {
    gsap.to(cursor, {
      scale: 1.5,
      opacity: .4,
      background: 'rgb(235,235,235)',
      border: 'none',
      ease: Expo.easeOut,
    })
    gsap.to(pointer, {
      scale: 0,
      opacity: 0
    })
  }
  const cursorNormal = () => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      background: 'transparent',
      border: '1px solid rgb(235,235,235)',
      innerHTML: ''
    })
    gsap.to(pointer, {
      scale: 1,
      opacity: 1
    })
  }
  return (
    <>
      <div className="cursor text-center text-black opacity-100 overflow-hidden
      text-base z-[11] pointer-events-none fixed bg-transparent rounded-[50%]
      top-[-25px] left-[-25px]"></div>
      <div className="pointer fixed pointer-events-none z-[11] opacity-100 rounded-[50%]"></div>
      <div id="header">
        <Navigation cursorHover={cursorHover} cursorNormal={cursorNormal} />
        <Social cursorHover={cursorHover} cursorNormal={cursorNormal} />

        <div className="headphone img text z-[2]">
          <Image src="/images/headphone.png"
            width={30}
            height={30}
            className="text cursor-pointer"
            alt="headphone"
            onMouseOver={cursorHover}
            onMouseLeave={cursorNormal}
          />
        </div>
      </div>
      <NavigationContent cursorHover={cursorHover} cursorNormal={cursorNormal} />
    </>
  )
}

export default Home