import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Home } from './pages/Home'
import { RestaurantProfile } from './pages/RestaurantProfile'
import { Checkout } from './components/checkout/Checkout'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurante/:id" element={<RestaurantProfile />} />
        </Routes>
        <Checkout />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
