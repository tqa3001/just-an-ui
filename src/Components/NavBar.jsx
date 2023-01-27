export default function NavBar() {
  return (
    <div className="bg-black text-white p-2">
      <div className="font-semibold">
        <h2>
          <a href="/" className="text-blue-500 text-xl">Cellular Automaton Generator</a> 
        </h2>      
      </div> 
      <div className=" flex justify-between">
        <div>
          <a href="#" className="text-yellow-400">Browse all</a>
          <span className="ml-2 mr-2">|</span>
          <a href="#">About</a>
          <span className="ml-2 mr-2">|</span>
          <a href="#">Github</a>
        </div>
        <div>
          <a href="#">Login</a>
          <span className="ml-2 mr-2">|</span>
          <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  )
}