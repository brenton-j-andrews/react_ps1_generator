import { useEffect, useState } from "react";

import ElementSelector from './components/Element_Selector/ElementSelector';
import Arrangement from "./components/Arrangement_Menu/Arrangement";

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {

  const [ promptElements, setPromptElements ] = useState([]);

  useEffect(() => {
    console.log(promptElements);
  }, [promptElements]);

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <header className='app-header'>
          Bash PS1 Prompt Generator
        </header>

        <ElementSelector setPromptElements={setPromptElements}/>

        <Arrangement promptElements={promptElements}/>

      </div>
    </div>
  );
}

export default App;
