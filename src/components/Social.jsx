import React from 'react'
import { facebook , twitter , instagram } from '../images'

const Social = () => {
    const imageClasse = 'w-[40px] h-[40px] object-contain p-2 border-solid border-white border-[1px] rounded-full m-2'
  return (
    <div className='flex'>
        <img src={facebook} alt='facebook' className={imageClasse}/>
        <img src={twitter} alt='twitter' className={imageClasse}/>
        <img src={instagram} alt='instagram' className={imageClasse}/>
    </div>
  )
}

export default Social