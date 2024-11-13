import React from 'react'
import {ToastContainer} from 'react-toastify'
import ChipSection from './components/ChipSection'
import TopSection from './components/TopSection'
import BettingSection from './components/BettingSection'

function App() {

  return (<div className='app'>
    <div className='app-container'>
      <ToastContainer
        hideProgressBar
        pauseOnFocusLoss
        draggable
        limit={4}
        // autoClose // comment out for debug
      />
      <TopSection/>
      <BettingSection/>
      <ChipSection />
    </div>
  </div>)
}

export default App
