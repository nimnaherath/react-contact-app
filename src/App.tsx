import { Link } from 'react-router'
import './App.css'
import { ReactNode } from 'react'

type AppProps = {
  children: ReactNode
}

function App({ children }: AppProps) {

  return (
    <div>
      {children}
    </div>
  )
}

export default App
