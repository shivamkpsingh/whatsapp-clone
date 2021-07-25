import './App.css';
import Sidebar from './Component/Sidebar';
import Chat from './Component/Chat'
function App() {
  return (
    <div className="app">
      <div className="app__body">
      <Sidebar/>
      <Chat/>
      </div>
    </div>
  );
}

export default App;
