import CAEntry from './CAEntry.jsx'

export default function Body() {
  const btn = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded"; 
  return (
    <div className="m-4">
      <header className="text-center">
        <h1 className="text-4xl text-blue-600">A customizable tool</h1> 
        <h2 className="text-2xl">for creating expriments with cellular automaton.</h2>
      </header>
      <div>
        <div className="flex justify-center">
            <button className={btn}>Create</button>
            <button className={btn}>Import</button>
            <button className={btn}>Run</button>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl m-2">Most popular CAs</h2>
          <div className="flex">
            <CAEntry className="flex-initial"/>
            <CAEntry className="flex-initial"/>
          </div>
          <button>Load more</button>
        </div>
      </div>
    </div>
  )
}