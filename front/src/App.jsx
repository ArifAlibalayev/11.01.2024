import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/Mainlayout'
import Mainpage from './pages/Mainpage'
import AddPage from './pages/Addpage'

function App() {

  return (
    <>
  <Routes>
    <Route element={<MainLayout/>}>
      <Route path='/' element={<Mainpage/>}></Route>
      <Route path='/AddPage' element={<AddPage/>}></Route>
    </Route>
  </Routes>
    </>
  )
}

export default App
