import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollAnimations = () => {
  useEffect(() => {
    // Fade in sections on scroll
    gsap.utils.toArray('section, .glass-card, .grid > div').forEach((element) => {
      gsap.fromTo(element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  return null
}

export default ScrollAnimations
