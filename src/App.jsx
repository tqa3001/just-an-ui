import './App.css'
import QuestionComponent from './QuestionComponent'  
import RadioComponent from './RadioComponent'

export default function App() {
  const questions = [
    {id: 1, text: 'Who is in Paris?'},
    {id: 2, text: 'What the dog doing?'}, 
    {id: 3, text: 'What is the powerhouse of the cell?'}, 
  ]
  return (
    <>
      <h1 className="text-3xl font-bold underline">Title</h1>
      {questions.map(question => <QuestionComponent questionId={question.id} question={question.text}/>)}
      <RadioComponent questionId={69} question="No bitches?" options={['Yes', 'Obviously', 'Numero unos']}/> 
    </> 
  )
}