import { lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Loader from './components/ui/Loader'

const Home = lazy(() => import('./components/Home'))
const Detail = lazy(() => import('./components/Detail'))

function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/home' element={
            <Suspense fallback={
              <div className='loader-center'>
                <Loader />
              </div>
            }>
              <Home />
            </Suspense>
          } />
          <Route path='/detail/:id' element={
            <Suspense fallback={
              <div className='loader-center'>
                <Loader />
              </div>
            }>
              <Detail />
            </Suspense>
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
