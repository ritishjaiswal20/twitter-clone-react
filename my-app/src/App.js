import './App.css';
import Sidebar from './Sidebar.js'
import react from 'react';
import Feed from './Feed.js'
import Widgets from './Widgets';
function App() {
  return (
    <div className="app"> 
      <Sidebar/>

      <Feed/>
      
      <Widgets/>
    </div>
  );
}

export default App;
