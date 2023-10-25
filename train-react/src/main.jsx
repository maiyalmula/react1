import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import Skills from './pages/Skills/Skills'
import Navbar from './pages/components/Navbar/Navbar'
import Footer from './pages/components/Footer/Footer'
import Contacts from './pages/Contacts/Contacts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
            <Navbar/>

              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/skills' element={<Skills/>} />
                <Route path='/contacts' element={<Contacts/>}/>
              </Routes>


            <Footer/>
      </Router>
  </React.StrictMode>,
)
