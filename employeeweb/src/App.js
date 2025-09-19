import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './pages/header/Header';
import {Routes, Route} from "react-router-dom";
import NoMatch from './pages/noMatch/NoMatch';
import PostUser from './pages/employee/PostUser';
import UpdateUser from './pages/employee/UpdateUser';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='*' element={<NoMatch/>}/>
        <Route path='/employee' element={<PostUser/>}/>
        <Route path='/employee/:id' element={<UpdateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
