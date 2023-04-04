import { Tab, Tabs } from "react-bootstrap";

import './element_selector.css';

const ElementSelector = () => {

  const basic_elements = [
    {
      "readable" : "Username",
      "display" : "user",
      "prompt_text" : "\\u",
    },
    {
      "readable" : "Hostname",
      "display" : "host",
      "prompt_text" : "\\h",
    },
    {
      "readable" : "FQDN",
      "display" : "host.domain.com",
      "prompt_text" : "\\H",
    },
    {
      "readable" : "Shell",
      "display" : "bash",
      "prompt_text" : "\\s",
    },
    {
      "readable" : "Shell Version",
      "display" : "4.3",
      "prompt_text" : "\\v",
    },
    {
      "readable" : "Shell Release",
      "display" : "4.3.43",
      "prompt_text" : "\\V",
    },
    {
      "readable" : "Path to Current Directory",
      "display" : "~/dir",
      "prompt_text" : "\\w",
    },
    {
      "readable" : "Current Directory",
      "display" : "dir",
      "prompt_text" : "\\W",
    },
    {
      "readable" : "$",
      "display" : "$",
      "prompt_text" : "\\$",
    },
  ]

  return (
    <div className="element-selector-wrapper">
      <h2 className='instruction-prompt'> Step 1: Select elements to use in your prompt. </h2>

      <div className="element-selector-menu">
         <Tabs defaultActiveKey="basic_elements" justify>

          <Tab eventKey="basic_elements" title="Basic Elements">

            <ul className="elements_list">
              {basic_elements.map(element => {
                return (
                  <li className="element_selector" key={element.readable}> { element.readable } </li>
                )
              })}
            </ul>
          </Tab>

          <Tab eventKey="status_elements" title="Status Elements">
            This is a test! status
          </Tab>

          <Tab eventKey="dt_elements" title="Date & Time Elements">
            This is a test! dt
          </Tab>

          <Tab eventKey="characters" title="Characters">
            This is a test! Chars 
          </Tab>

         </Tabs>  
      </div>
    </div>
  )
}

export default ElementSelector;