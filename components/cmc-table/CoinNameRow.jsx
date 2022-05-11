import React from 'react'
import Image from 'next/image'

const CoinNameRow = ({name, icon}) => {
  return (
    <div className='flex' >
        <Image src={icon} alt='Icon' width={20} height={20} />
        <p>&nbsp;{name}</p>
    </div>
  )
}

export default CoinNameRow