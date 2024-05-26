import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from './components/Buttons'
import ApiFetch from './components/ApiFetch';
import DisplayFatchApi from './components/DisplayFatchApi';

function App() {

  return (
    <>
    <Buttons></Buttons>
    <DisplayFatchApi></DisplayFatchApi>
    <ApiFetch></ApiFetch>

    </>
  )
}

export default App
