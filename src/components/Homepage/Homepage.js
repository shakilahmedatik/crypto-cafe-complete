import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='md:px-16 py-8'>
      <div className='flex flex-col justify-center h-[80vh] items-center'>
        <h1 className=' font-mono text-xl md:text-5xl '>
          Welcome to CRYPTO CAFE<span className='text-6xl'>☕</span>
        </h1>
        <Link
          to='/coins'
          className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-600'
        >
          Explore Coins
        </Link>
      </div>
    </div>
  )
}

export default Homepage
