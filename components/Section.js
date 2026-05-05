'use client'

export default function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`w-full ${className}`}
    >
      {children}
    </section>
  )
}
