export default function NavBar() {
  return (
    <div className="bg-emerald-500">
      <div className="font-semibold">
        <h2>
          <a href="/">Cellular Automaton Generator</a> 
        </h2>      
      </div> 
      <ul>
        <li>
          <a href="#">
            <span>Browse</span>
          </a>
        </li>
        <li>
          <a href="#"> 
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Github</span>
          </a>
        </li>
      </ul>
    </div>
  )
}