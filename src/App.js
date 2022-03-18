
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {useStateValue} from './StateProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Chat from './Chat';
import { useState } from 'react';
import Login from './Login';
function App() {
  // const [user,setUser] = useState();
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
    <Router>
      {!user ? (
        <Login />
      ) : 
      (
        <>
            <Header />
         <div className="app_body">   
          <Sidebar />
          <Routes>
            <Route path='/room/:roomId' element={<Chat />}/>
            <Route path="/" />
          </Routes>
        </div>
        </>
      )}
      {/* <Header />
      <div className="app_body">   
        <Sidebar />
        <Routes>
          <Route path='/room/:roomId' element={<Chat />}/>
          <Route path="/" />
        </Routes>
      </div> */}
      </Router>
      
    </div>
  );
}

export default App;
