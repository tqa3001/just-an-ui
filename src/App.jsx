import './App.css'
import NavBar from './Components/NavBar.jsx'
import Body from './Components/Body.jsx'

export default function App() {
  {/* Notes: 
    * you can't render an object 
    * bug: import NavBar.jsx => import Navbar.jsx (hmr won't work)
    * */}
  return (
    <main className="font-mono"> 
      <NavBar />
      <Body />
    </main> 
  )
}