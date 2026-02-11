import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Productspage from './pages/ProductList'
import CartPage from './pages/CartItem'
import App from './App'

function AppRouter() {


  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/products' element={<Productspage/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
     </Routes>
     </BrowserRouter>
  )
}

export default AppRouter
