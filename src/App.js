import { useEffect, useState } from "react";

import ElementSelector from './components/Element_Selector/ElementSelector';

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

      </div>
    </div>
  );
}

export default App;
