import { createContext, useState } from 'react'

export const CardContext = createContext()

export function CardProvider ({ children }) {
  const [cardData, setCardData] = useState({
    title: 'Card number One'
  })
  console.log('CardProvider')
  return (
    <CardContext.Provider value={{
      card: cardData,
      setCard: setCardData
    }}
    >
      {children}
    </CardContext.Provider>
  )
}
