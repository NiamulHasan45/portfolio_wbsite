
import './App.css';
import About from './Components/About/About';
import ContactMe from './Components/ContactMe/ContactMe';
import Project from './Components/Project/Project';
import Projects from './Components/Projects/Projects';
import Footer from './Components/SharedComponents/Footer';
import Header from './Components/SharedComponents/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App bg-primary text-white">
      <ToastContainer/>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <ContactMe></ContactMe>

      <Footer></Footer>

    </div>
  );
}

export default App;
