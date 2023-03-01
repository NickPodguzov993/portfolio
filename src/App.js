import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Footer} from "./footer/Footer";
import Slide,{Fade} from "react-awesome-reveal";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Slide triggerOnce={true}><Skills/></Slide>
            <Slide triggerOnce={true}> <Projects/></Slide>
            <Fade><Footer/></Fade>
        </div>
    );
}

export default App;


