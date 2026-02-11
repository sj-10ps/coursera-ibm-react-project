import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Productspage from './pages/Productspage'
import CartPage from './pages/CartPage'

function App() {


  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/products' element={<Productspage/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
     </Routes>
     </BrowserRouter>
  )
}

export default App
