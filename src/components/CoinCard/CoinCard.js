import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({ coin }) => {
  return (
    <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4'>
      <Link to={`/coin-details/${coin.id}`}>
        <div className='gap-4 flex justify-between items-center'>
          <div className='flex-shrink-0'>
            <div>
              <img
                alt='profile'
                src={coin.image}
                className='mx-auto object-cover rounded-full h-16 w-16 '
              />
            </div>
          </div>
          <div className=' flex flex-col justify-end'>
            <span className='text-gray-600 font-medium'>{coin.name}</span>
            <span className='text-gray-400 text-xs'>{coin.symbol}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CoinCard
