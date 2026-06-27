import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './context/CartContext'
import { Home } from './pages/Home'
import { RestaurantProfile } from './pages/RestaurantProfile'
import { Checkout } from './components/checkout/Checkout'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurante/:id" element={<RestaurantProfile />} />
          </Routes>
          <Checkout />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
