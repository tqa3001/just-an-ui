import styles from './styles.module.css'
import CAExtendedEntry from './CAExtendedEntry.jsx'
import CAEntry from './CAEntry.jsx';
import BarGraph from './BarGraph';

export default function Body() {
  const btn = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded"; 
  const mostPopular = [5, 12, 4]
  let statType = 0; 
  return (
    <div className="px-6">
      <header className="text-center my-10">
        <h1 className="font-bold text-6xl text-blue-600">A customizable tool</h1> 
        <h2 className="font-bold text-2xl">for creating expriments with cellular automaton (CA).</h2>
        <div className="flex justify-center">
          <button className={btn}>Create</button>
          <button className={btn}>Import</button>
          <button className={btn + " bg-orange-500 hover:bg-orange-600"}>Run!</button>
        </div>
      </header>
      <div>
        <div className={"mt-4 " + styles.tictactoe}>
          <h2 className="font-bold text-3xl m-2">Dashboard</h2>
          <div className="flex justify-between ">
            <div className="basis-2/5">
              <span className="text-2xl m-2 font-bold">My CAs</span>
              {[...Array(3).keys()].map((id) => 
                <CAEntry automaton={{id: id, name: "Waffle House", shortDescription: "Hey it's Quandale Dingle!"}}/>
              )}
              <a href="#" className="w-full text-xl font-bold text-blue-700 m-2">View all</a>
            </div>
            <div className="basis-3/5">
              <div className="flex justify-center">   
                <div className="flex flex-col mr-8">
                  <div className="text-cente">
                    <span className="text-2xl m-2 font-bold">Stats</span>
                  </div>
                  <button className={btn + " min-w-min"}>Stat 1</button> 
                  <button className={btn + " min-w-min"}>Stat 2</button>
                  <a href="#" className="text-xl font-bold text-blue-700">View all</a>
                </div>
                <BarGraph statType={0}/>
              </div>
            </div>
          </div>
          <h2 className="text-2xl m-2 font-bold">Most popular CAs</h2>
          <div className="flex">
            {mostPopular.map((automatonId) => <CAExtendedEntry className="flex-initial mx-4" automaton={{id: automatonId}}/>)}
          </div>
          <a href="#" className="text-2xl font-bold">View all</a>
        </div>
      </div>
    </div>
  )
}