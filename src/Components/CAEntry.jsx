export default function CAEntry({ automaton, styleOptions }) {
  return (
    <div className={"mx-2 my-1 p-2 bg-blue-500 rounded-xl text-white hover:text-yellow-400 hover:bg-blue-900" + " " + styleOptions}>
      <span className="font-bold">#{automaton.id} | </span>
      <span className="font-bold">{automaton.name} | </span>
      <span>{automaton.shortDescription}</span>
    </div>
  )
}