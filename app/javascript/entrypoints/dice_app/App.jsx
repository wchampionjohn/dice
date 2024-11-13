import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import ChipSection from './components/ChipSection'
import TopSection from './components/TopSection'
import BettingSection from './components/BettingSection'

import './styles/index.scss'

function App() {
  const [totalBalance] = useState(1987)

  return (
    <div className='app'>
      <div className='app-container'>
        <ToastContainer
          hideProgressBar
          pauseOnFocusLoss
          draggable
          limit={4}
          // autoClose // comment out for debug
        />
        <TopSection />
        <BettingSection />
        <ChipSection balance={totalBalance} />
      </div>
    </div>
  )
}

export default App
