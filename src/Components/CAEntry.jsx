export default function CAEntry({ automatonId }) {
  return (
    <div className="rounded-xl bg-blue-500 p-4 m-2">
      <h2 className="font-bold text-xl">Conway's Game of Life</h2>
      <h3>#{automatonId}</h3>
      <img src="https://picsum.photos/200" alt=""/>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
    </div>
  )
}