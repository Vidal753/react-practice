import React, { useContext } from 'react'
import { CardContext } from './Context/CardContext'

export const Card = () => {
  const { card } = useContext(CardContext)
  console.log('Card')
  return (
    <div className='p-2 mt-5 rounded-md bg-slate-300 '>
      <h1>{card.title}</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at ratione doloremque nisi velit. Nam animi laudantium dolore quidem accusantium nihil explicabo, ad, minus amet ipsa reprehenderit voluptas debitis quia?</p>
    </div>
  )
}
