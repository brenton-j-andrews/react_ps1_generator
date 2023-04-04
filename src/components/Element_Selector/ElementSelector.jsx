// This component contains the menu from which you can select elements for your prompt.

import { Tab, Tabs } from "react-bootstrap";

import "../../app.css";
import './element_selector.css';

const ElementSelector = ({ setPromptElements }) => {

  const basic_elements = [
    {
      "id" : null,
      "readable" : "Username",
      "display" : "user",
      "prompt_text" : "\\u",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "Hostname",
      "display" : "host",
      "prompt_text" : "\\h",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "FQDN",
      "display" : "host.domain.com",
      "prompt_text" : "\\H",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "Shell",
      "display" : "bash",
      "prompt_text" : "\\s",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "Shell Version",
      "display" : "4.3",
      "prompt_text" : "\\v",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "Shell Release",
      "display" : "4.3.43",
      "prompt_text" : "\\V",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "Path to Current Directory",
      "display" : "~/dir",
      "prompt_text" : "\\w",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "Current Directory",
      "display" : "dir",
      "prompt_text" : "\\W",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "$",
      "display" : "$",
      "prompt_text" : "\\$",
      "font_color" : null,
      "bg_color" : null
    },
  ]

  const handleClick = (element) => {
    element.id = crypto.randomUUID();
    setPromptElements(prevState => [...prevState, element]);
  }

  return (
    <div className="step-wrapper">
      <h2 className='instruction-prompt'> Step 1: Select elements to use in your prompt. </h2>

      <div className="element-selector-menu">
         <Tabs defaultActiveKey="basic_elements" justify>

          <Tab eventKey="basic_elements" title="Basic Elements">

            <ul className="elements-list">
              {basic_elements.map(element => {
                return (
                  <li className="element-selector" onClick={() => {handleClick(element)}} key={element.readable}> { element.readable } </li>
                )
              })}
            </ul>
          </Tab>

          <Tab eventKey="status_elements" title="Status Elements">
            Do status elements later my man!
          </Tab>

          <Tab eventKey="dt_elements" title="Date & Time Elements">
            Do status elements later my man!
          </Tab>

          <Tab eventKey="characters" title="Characters">
            Do status elements later my man!
          </Tab>

         </Tabs>  
      </div>
    </div>
  )
}

export default ElementSelector;