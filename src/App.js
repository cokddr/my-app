import React, { useState } from 'react'
import Navbar from './navbar'
import GlobalStyles from './global-styles'

function App() {
  const [title, setTitle] = useState('App 페이지의 Navbar')

  return (
    <div>
      <GlobalStyles />
      <Navbar title={title} />
    </div>
  )
}

export default App
