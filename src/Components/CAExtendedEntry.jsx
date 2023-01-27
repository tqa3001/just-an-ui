export default function CAExtendedEntry({ automaton }) {
  return (
    <div className="group shadow-2xl rounded-xl bg-blue-500 text-white m-2 py-4 hover:bg-blue-900">
      <h2 className="group-hover:text-yellow-500 font-bold text-xl px-4 text-slate-800">Conway's Game of Life</h2>
      <h3 className="group-hover:text-yellow-500 px-4">#{automaton.id}</h3>
      <img src="https://picsum.photos/500/200" alt="" className="py-2"/>
      <div className="px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
  )
}