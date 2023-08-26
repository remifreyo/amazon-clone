import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import './Payment'
import Payment from './Payment'

const App = () => {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <div className="app">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
            </>
          }
        />
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
    </div>
  )
}

export default App
