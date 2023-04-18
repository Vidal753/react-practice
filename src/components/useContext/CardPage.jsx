import React from 'react'
import { Card } from './Card'
import { ChangeButton } from './ChangeButton'
import { CardProvider } from './Context/CardContext'
export default function CardPage () {
  console.log('CardPage')
  return (
    <CardProvider>
      <div>
        <h1 className='text-[2rem]'>Cards</h1>
        <hr />
        <Card />
      </div>
      <ChangeButton data={{ title: 'New Card' }} />
    </CardProvider>
  )
}
