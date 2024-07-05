import { carInterface } from '@/interfaces'
import Image from 'next/image'
import React from 'react'

export const Card = ({ car }: { car: carInterface }) => {
  return (
      <div>
          <h4>{car.name}</h4>
          <h5>{car.year} | ${car.price}</h5>
          <Image src={car.thumbnail} alt={car.name} width={200} height={200} />
    </div>
  )
}
