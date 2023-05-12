import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Features from "./components/Features";
import Extension from "./components/Extension";
import Questions from "./components/Questions";
import Callout from "./components/Callout";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <Features></Features>
      <Extension></Extension>
      <Questions></Questions>
      <Callout></Callout>
      <Footer></Footer>
    </div>
  );
}

export default App;
