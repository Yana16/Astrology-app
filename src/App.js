import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Goal from "./Components/Goal";
import About from "./Components/About";
import Points from "./Components/Points";
import Services from "./Components/Services";
import Contacts from "./Components/Contacts";
import General from "./Components/General";
import Comment from "./Components/Comment";
import Certificates from "./Components/Certificates";
import Carusel from "./Components/Carusel";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <Header />
      <General />
      <Goal />
      <About />
      <Certificates />
      <Points />
      <Services />
      <Carusel />
      <Comment />
      <Contacts />
    </>
  );
}

export default App;
