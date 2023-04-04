import { Tab, Tabs } from "react-bootstrap";

import './element_selector.css';

const ElementSelector = ({ setPromptElements }) => {

  const basic_elements = [
    {
      "readable" : "Username",
      "display" : "user",
      "prompt_text" : "\\u",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "readable" : "Hostname",
      "display" : "host",
      "prompt_text" : "\\h",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "readable" : "FQDN",
      "display" : "host.domain.com",
      "prompt_text" : "\\H",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "readable" : "Shell",
      "display" : "bash",
      "prompt_text" : "\\s",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "readable" : "Shell Version",
      "display" : "4.3",
      "prompt_text" : "\\v",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "readable" : "Shell Release",
      "display" : "4.3.43",
      "prompt_text" : "\\V",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "readable" : "Path to Current Directory",
      "display" : "~/dir",
      "prompt_text" : "\\w",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "readable" : "Current Directory",
      "display" : "dir",
      "prompt_text" : "\\W",
      "font_color" : null,
      "bg_color" : null
    },
    {
      "readable" : "$",
      "display" : "$",
      "prompt_text" : "\\$",
      "font_color" : null,
      "bg_color" : null
    },
  ]

  const handleClick = (element) => {
    setPromptElements(prevState => [...prevState, element]);
  }

  return (
    <div className="element-selector-wrapper">
      <h2 className='instruction-prompt'> Step 1: Select elements to use in your prompt. </h2>

      <div className="element-selector-menu">
         <Tabs defaultActiveKey="basic_elements" justify>

          <Tab eventKey="basic_elements" title="Basic Elements">

            <ul className="elements_list">
              {basic_elements.map(element => {
                return (
                  <li className="element_selector" onClick={() => {handleClick(element)}}key={element.readable}> { element.readable } </li>
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