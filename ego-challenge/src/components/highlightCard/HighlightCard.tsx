import Image from 'next/image'
import React from 'react'

export const HighlightCard = ({title, content, image}:{title:string, content:string, image:string}) => {
  return (
      <div>
          <div>
        {/* <Image src={image} alt={title} layout='fill'/> */}
          </div>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}
