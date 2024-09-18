import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

function App() {
  const [task, setTask] = useState([]);
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => { expensiveCalculation(count); }, [count]);
  function newCount() {
    setCount((t) => t + 1);
  }
  return (
    <div className="App">
      <div>
        <h1>Add New Task</h1>
        {task.map((task, index) => {
          return (<p>{task}</p>)
        })}
        {/* new spreading operator with setting new array and their tasks,,,, */}
        <button onClick={() => { setTask((t) => [...t, "new task"]) }}>Add Task +</button>
      </div>
      <div>
        <h2>Add count</h2>
        Count : {count}
        <button onClick={newCount}>Add count</button>
        {calculation}
      </div>
    </div>
  );
}

export default App;

//calculating expensive calculation at a same time.
function expensiveCalculation(num) {
  console.log('calculating....');
  for (let i = 0; i < 1000000; i++) {
    num += i;
  }
  return num;

}
