import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
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
