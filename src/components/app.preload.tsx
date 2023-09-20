'use client'
import gsap, { Expo } from "gsap"
import Image from "next/image"
import { useLayoutEffect } from "react"

const Preload = () => {
  useLayoutEffect(() => {
    gsap.to('.p', 1, {
      opacity: 0,
      y: '-15%',
      stagger: -.1,
    })
    gsap.to('#preloader', 2.5, {
      y: '-100%',
      ease: Expo.easeInOut,
      delay: 1,
      onComplete: function () {
        const delay = (ms: number) => new Promise(
          resolve => setTimeout(resolve, ms)
        );
        document.querySelectorAll('.text').forEach(async(item)=>{
          await delay(1200)
          item.classList.add('reveal')
        })
        document.querySelectorAll('.img').forEach(async(item)=>{
          await delay(1200)
          item.classList.add('reveal')
        })
        document.querySelectorAll('.menu-bar-line').forEach(async(item)=>{
          await delay(2000)
          item.classList.add('opacity')
        })
        // if (document.querySelector('#index-two') || document.querySelector('#index-one')) {
        //   gsap.to('.new-release', 0, { opacity: 1 })
        //   $('.new-release').delay(2000).addClass('opacity');
        // }
        // if (document.querySelector('.fade-in')) {
        //   gsap.to('.fade-in', 1, { delay: 1, opacity: 1, stagger: .4 })
        // }
        // if (document.querySelector('.opacity-contact')) {
        //   gsap.to('.opacity-contact', 1, { delay: 1, opacity: 1, stagger: .4 })
        // }
        // //ALL THE ANIMATIONS THAT WILL TAKE PLACE WHILE SCROLLING
        // $(function () {
        //   var elements = $(".text-scroll, .img-scroll").toArray();
        //   $(window).scroll(function () {
        //     elements.forEach(function (item) {
        //       if ($(this).scrollTop() >= $(item).offset().top - window.innerHeight) {
        //         $(item).addClass("reveal");
        //       }
        //     });
        //   });
        //   elements.forEach(function (item) {
        //     if ($(this).scrollTop() >= $(item).offset().top - window.innerHeight) {
        //       $(item).addClass("reveal");
        //     }
        //   });
        // });
        // //animation for songs page
        // if (document.querySelector('.fade-up')) {
        //   gsap.to('.fade-up', 1, { opacity: 1, y: 0, delay: 1, stagger: .1 })
        // }
        // if (document.querySelector('.music-indicator')) {
        //   gsap.to('.music-indicator', 1, { opacity: 1, delay: 1 })
        // }
        // if (document.querySelector('.scale')) {
        //   gsap.to('.scale', 1, { opacity: 1, delay: 1, scale: 1, stagger: .2 })
        // }
      }
    })
  })
  return (
    <div id="preloader">
      <div className="p">
        <Image rel="preload" src="/images/headphone.png" width={60} height={60} alt="headphone" />
        <span className="text-2xl">Use Headphone For Better Experience</span>
      </div>
    </div>
  )
}

export default Preload