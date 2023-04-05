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
      <div className="app-container">
        <header className='app-header'>
          Bash PS1 Prompt Generator
        </header>

        <ElementSelector setPromptElements={setPromptElements}/>

        <Arrangement promptElements={promptElements} setPromptElements={setPromptElements}/>

        <Preview promptElements={promptElements}/>
 
        <Output promptElements={promptElements}/>
       </div>

       <button onClick={() => {console.log(promptElements[0])}}> State Log!!! </button>
    </div>
  );
}

export default App;
