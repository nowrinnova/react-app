import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <Container>
        <Header></Header>
        <Display></Display>
        <Buttons></Buttons>
      </Container>
      
    </>
  );
}

export default App;
