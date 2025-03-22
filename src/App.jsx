import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import ProductOverview from './pages/admin/Products'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Login />} />
          <Route path="Product" element={<Product />} />
          <Route path="/Product/:id" element={<ProductDetail />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<ProductOverview />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
