import { ClassType } from '@/share/types'
import React from 'react'

type Props = {
    classData:ClassType
}

const Class = ({classData}: Props) => {

    const overlayStyles=`p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`

  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px] '>
        <div className={overlayStyles}>
            <p className='text-2xl mb-5'>{classData.name}</p>
            <p>{classData.description}</p>
        </div>
        <img src={classData.image} alt="" />
    </li>
  )
}

export default Class