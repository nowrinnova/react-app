import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Math from "./components/Math";
function App() {
  return (
    <>
      <Container>
        <Header></Header>
        <Display></Display>
        <Buttons></Buttons>
      </Container>
      <Math></Math>
    </>
  );
}

export default App;
