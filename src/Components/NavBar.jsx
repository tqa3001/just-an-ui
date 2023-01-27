export default function NavBar() {
  return (
    <div className="bg-blue-900 text-white flex">
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
      <a href="#">Login</a>
      <a href="#">Sign up</a>
    </div>
  )
}