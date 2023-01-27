export default function NavBar() {
  return (
    <div className="bg-black text-white p-2">
 
      <div className=" flex justify-between">
        <div className="mt-2">
          <a href="#">Login</a>
          <span className="ml-2 mr-2">|</span>
          <a href="#">Sign up</a>
        </div>         
        <div className="flex font-semibold text-xl">
          <a href="#" className="relative w-7 h-10 mr-4">
            <div className="absolute left-1 bg-red-400 w-4 h-8 rounded-sm"></div>
            <div className="absolute bottom-1 rounded-lg opacity-75 w-5 h-5 bg-blue-300"></div>
            <div className="absolute bottom-0 right-0 opacity-50 bg-green-300 w-4 h-8 rounded-sm"></div>
          </a>
          <div className="mt-2">
            <a href="#" className="text-blue-500">Cellular Automaton Generator</a>   
            <span className="ml-2 mr-2">|</span>
            <a href="#" className="text-yellow-400">Browse all</a>
          </div>
        </div>
        <div className="mt-2">
          <a href="#">About</a>
          <span className="ml-2 mr-2">|</span>
          <a href="#">Github</a>
        </div>
      </div>
    </div>
  )
}