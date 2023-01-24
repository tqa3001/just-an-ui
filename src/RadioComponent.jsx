export default function RadioComponent({ questionId, question, options }) {
  return (
    <section className="flex place-content-center m-4">
      <div className="overflow-hidden bg-slate-900 text-slate-300 min-w-full">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold underline">Question {questionId}</h1>
          <h2>{question}</h2>
          <div>
            { options.map(option => (
              <div>
                <input name={questionId} type="radio"/> 
                <label>{option}</label>
              </div> 
            ))}
          </div>
          <button className="my-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Submit</button>
        </div>
      </div>
    </section>
  )
}