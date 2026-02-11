import React from 'react'

const AboutUs = () => {
  return (
    <div className="about-us-container flex flex-col gap-3 md:max-w-[50%]">
      <p className="text-center text-slate-400 md:text-lg capitalize">
        Welcome to Paradise Nursery, where green meets serenity
      </p>

      <p className="text-slate-200">
        Paradise Nursery is dedicated to bringing nature closer to your home.
        We specialize in providing a wide variety of healthy and sustainable
        plants to enhance your living spaces.
      </p>

      <p className="text-slate-200">
        Our mission is to promote a greener lifestyle by offering high-quality
        plants along with expert guidance for plant care and maintenance.
      </p>

      <p className="text-slate-200">
        We offer services including indoor and outdoor plants, gardening
        solutions, and eco-friendly products designed to create peaceful,
        natural environments.
      </p>
    </div>
  )
}

export default AboutUs
