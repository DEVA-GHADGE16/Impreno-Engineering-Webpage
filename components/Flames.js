'use client'

import { useEffect, useRef } from 'react'

export default function Embers() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = []

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.6,
        life: 0,
        maxLife: Math.random() * 300 + 200,
      }
    }

    for (let i = 0; i < 120; i++) {
      particles.push(createParticle())
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.y -= p.speedY
        p.x += p.speedX
        p.life++

        const alpha = 1 - p.life / p.maxLife

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 2
        )
        gradient.addColorStop(0, `rgba(255,140,0,${alpha})`)
        gradient.addColorStop(0.5, `rgba(255,60,0,${alpha * 0.6})`)
        gradient.addColorStop(1, 'rgba(255,0,0,0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
        ctx.fill()

        if (p.life > p.maxLife || p.y < -50) {
          particles[i] = createParticle()
        }
      })

      requestAnimationFrame(draw)
    }

    draw()

    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}
