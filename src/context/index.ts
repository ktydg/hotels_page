import { createContext } from 'react'


export const Context = createContext<{
  cartItems: number,
  setCartItems: React.Dispatch<React.SetStateAction<number>>
} | null>(null)
