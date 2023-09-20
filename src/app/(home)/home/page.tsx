'use client'

import Navigation from "@/components/app.navigation"
import NavigationContent from "@/components/app.navigation.content"
import Social from "@/components/app.social.link"
import gsap from "gsap"
import { Expo } from "gsap"
import Image from "next/image"
import { useLayoutEffect } from "react"

const Home = () => {
    useLayoutEffect(() => {
        const cursor = '.cursor'
        const pointer = '.pointer'
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
    return (
        <>
            <div className="cursor"></div>
            <div className="pointer"></div>
            <div id="header">
                <Navigation />
                <Social />

                <div className="headphone img text">
                    <Image src="/images/headphone.png" width={30} height={30} className="text" alt="headphone"/>
                </div>
            </div>
            <NavigationContent />
        </>
    )
}

export default Home