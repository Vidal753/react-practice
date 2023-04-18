import React, { useContext } from 'react'
import { CardContext } from './Context/CardContext'

export const ChangeButton = ({ data }) => {
  const { setCard } = useContext(CardContext)
  console.log('ChangeButton')
  return (
    <button onClick={() => setCard({ title: data.title })} className='p-2 mt-4 text-white bg-black rounded-md'>Change</button>
  )
}
