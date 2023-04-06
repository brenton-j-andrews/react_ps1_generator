import { useState } from "react";

import ElementSelector from './components/Element_Selector/ElementSelector';
import Arrangement from "./components/Arrangement_Menu/Arrangement";
import Preview from "./components/Preview_Display/Preview";
import Output from "./components/Prompt_Output/Output";

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {

  const [ promptElements, setPromptElements ] = useState([]);

  return (
    <div className="app-wrapper">

      <header className='app-header'>
        Bash PS1 Prompt Generator
      </header>

      <div className="app-container">
        <ElementSelector setPromptElements={setPromptElements}/>

        <Arrangement promptElements={promptElements} setPromptElements={setPromptElements}/>

        <Preview promptElements={promptElements}/>
 
        <Output promptElements={promptElements}/>
      </div>

       <div className="app-footer">
        <span className="footer-line"> 
          Copyright {new Date().getFullYear()} - Brenton Andrews - <a className="footer-anchor" href="https://github.com/"> Github </a>
        </span>
        <br />
        <span className="footer-line"> 
          Error function, Git function and design sourced from <a className="footer-anchor" href="https://ezprompt.net/"> EzPrompt.net</a>
        </span>
       </div>
    </div>
  );
}

export default App;
