import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'

const App = () => {
  return (
    <BrowserRouter>
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
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
