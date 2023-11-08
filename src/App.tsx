import { Routes,Route, BrowserRouter } from 'react-router-dom'
import { Homepage } from './Pages/Home'
import {Pedidos} from './Pages/Pedidos'
import { Clientes } from './Pages/Clientes'

function App() {
 
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' Component={Homepage}></Route>
        <Route path='/pedidos' Component={Pedidos}></Route>
        <Route path='/clientes' Component={Clientes}></Route>
      </Routes>
     </BrowserRouter>
  )
}

export default App
