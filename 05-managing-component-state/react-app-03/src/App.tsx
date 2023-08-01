import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug-1', fixed: false},
    {id: 2, title: 'Bug-2', fixed: false},
    {id: 3, title: 'Bug-3', fixed: false},
  ]);

  const handleClick = () => {
    setBugs(bugs.map(bug => bug.id === 2 ? {...bug, fixed:true} : bug))
  }

  return (<div>
    <p>{bugs.map(bug => bug.fixed ? <p>{bug.title}</p> : <p>{bug.id}</p> )}</p>
    <button onClick={handleClick}>Click Me</button>
  </div>)
}

export default App
