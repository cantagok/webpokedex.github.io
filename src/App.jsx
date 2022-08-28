import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PokemonPage from './pages/PokemonPage'
import { AppProvider } from './AppContext'

/**  
 * Implement A search Function 
 * Change theme color to red as primary
 * Finish pokemon page
 * optimize code
 * remove unncessary code
 * remove theme item and style remaining components using styled
 * Create Transition when home and pokemon page enters
*/
function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <AppProvider>
        <Routes>
          <Route path='/' element={<Navigate to='/Home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/pokemon/:id/:name' element={<PokemonPage/>}/>
        </Routes>
      </AppProvider>
    </Router>
  )
}

export default App
