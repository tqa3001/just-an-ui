import styles from './styles.module.css'
import CAExtendedEntry from './CAExtendedEntry.jsx'
import CAEntry from './CAEntry.jsx';

export default function Body() {
  const btn = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded"; 
  const most_popular = [5, 12, 4]
  return (
    <div className="m-4">
      <header className="text-center">
        <h1 className="font-bold text-6xl text-blue-600">A customizable tool</h1> 
        <h2 className="font-bold text-2xl">for creating expriments with cellular automaton (CA).</h2>
      </header>
      <div>
        <div className="flex justify-center">
          <button className={btn}>Create</button>
          <button className={btn}>Import</button>
          <button className={btn}>Run</button>
        </div>
        <div className={"mt-4 " + styles.tictactoe}>
          <h2 className="text-2xl m-2">My CA's</h2>
          {[...Array(3).keys()].map((id) => <CAEntry automaton={{id: id, name: "Waffle House", shortDescription: "Hey it's Quandale Dingle here"}} />) }
          <h2 className="text-2xl m-2">Most popular CAs</h2>
          <div className="flex">
            {most_popular.map((automatonId) => <CAExtendedEntry className="flex-initial mx-4" automaton={{id: automatonId}}/>)}
          </div>
          <button>View all</button>
        </div>
      </div>
    </div>
  )
}