import {TodoList} from './TodoList'
import './App.css';
import { TodoStore } from './TodoStore';

function App() {
  return (
    <div className="App">
      <TodoList todoStore={ TodoStore }/>
    </div>
  );
}

export default App;
