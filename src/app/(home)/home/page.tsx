'use client'

import gsap from "gsap"
import { Expo } from "gsap"
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
        // const cursor = '.cursor'
        // const cursortwo = '.cursor-two'
        // const cursormover = (e: any) => {
        //     gsap.to(cursor, {
        //         x: e.clientX,
        //         y: e.clientY,
        //     })
        //     gsap.to(cursortwo, {
        //         x: e.clientX,
        //         y: e.clientY,
        //     })
        // }
        // const cursorhover = (e: any) => {
        //     gsap.to(cursor, {
        //         scale: 1.5,
        //         opacity: .4,
        //         background: 'rgb(235,235,235)',
        //         border: 'none',
        //         ease: Expo.easeOut,
        //     })
        //     gsap.to(cursortwo, {
        //         scale: 0,
        //         opacity: 0
        //     })
        // }
        // const cursorfn = (e: any) => {
        //     gsap.to(cursor, {
        //         scale: 1,
        //         opacity: 1,
        //         background: 'transparent',
        //         border: '1px solid rgb(235,235,235)',
        //         innerHTML: ''
        //     })
        //     gsap.to(cursortwo, {
        //         scale: 1,
        //         opacity: 1
        //     })
        // }
        // document.addEventListener('mousemove', cursormover);
        // document.querySelector('a').hover(cursorhover, cursor);
        // $('.hover').hover(cursorhover, cursor);
        // $('.mouse').hover(cursorhover, cursor);
    }, [])
    return (
        <>
            <div className="cursor scale"></div>
            <div className="pointer scale"></div>
        </>
    )
}

export default Home