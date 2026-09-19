import "./styles/App.scss"
import { stateTasks } from "./hooks/stateTasks"
import Tree from "./components/Tree"

function App() {
  return <TaskTree />;
}

function TaskTree() {
  const { tasks } = stateTasks();

  return <Tree task={tasks} />;
}

export default App
