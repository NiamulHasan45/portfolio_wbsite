
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';
import Project from './Components/Project/Project';
import Header from './Components/SharedComponents/Header'
import Footer from './Components/SharedComponents/Footer'
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App bg-primary text-white">
      <Header></Header>
      <div className='main-body'>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/projectdetail' element={<Project></Project>}></Route>
        <Route path='/projectdetail/:id' element={<ProjectDetail></ProjectDetail>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
