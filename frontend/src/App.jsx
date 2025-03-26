import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ImageUploader from './components/ImageUploader'

const App = () => {
  return (
    <Router> {/* Wrap your components with Router */}
      <div>
        <Navbar/>
        <ImageUploader />
      </div>
    </Router>
  )
}

export default App