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
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "Hostname",
      "display" : "host",
      "prompt_text" : "\\h",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "FQDN",
      "display" : "host.domain.com",
      "prompt_text" : "\\H",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "Shell",
      "display" : "bash",
      "prompt_text" : "\\s",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "Shell Version",
      "display" : "4.3",
      "prompt_text" : "\\v",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "Shell Release",
      "display" : "4.3.43",
      "prompt_text" : "\\V",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "Path to Current Directory",
      "display" : "~/dir",
      "prompt_text" : "\\w",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "Current Directory",
      "display" : "dir",
      "prompt_text" : "\\W",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "$",
      "display" : "$",
      "prompt_text" : "\\$",
      "font_color" : "#fff",
      "bg_color" : null
    },
  ]

  const status_elements = [
    {
      "id" : null,
      "readable" : "Error Code",
      "display" : "1",
      "prompt_text" : "\\u",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "Git Status",
      "display" : "[master]",
      "prompt_text" : "\\h",
      "font_color" : "#fff",
      "bg_color" : null
    },
  ]

  const date_time_elements = [
    {
      "id" : null,
      "readable" : "Date",
      "display" : "Tue Apr 04",
      "prompt_text" : "\\d",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "24HR Time",
      "display" : "18:17",
      "prompt_text" : "\\A",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "12HR Time",
      "display" : "06:17 PM",
      "prompt_text" : "\\@",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "24HR Time w/Seconds",
      "display" : "18:17:32",
      "prompt_text" : "\\t",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "12HR Time w/Seconds",
      "display" : "06:17:43 PM",
      "prompt_text" : "\\T",
      "font_color" : "#fff",
      "bg_color" : null
    }
  ]

  const extra_characters = [
    {
      "id" : null,
      "readable" : "@",
      "display" : "@",
      "prompt_text" : "@",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : ":",
      "display" : ":",
      "prompt_text" : ":",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "[",
      "display" : "[",
      "prompt_text" : "[",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "]",
      "display" : "]",
      "prompt_text" : "]",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "-",
      "display" : "-",
      "prompt_text" : "-",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "_",
      "display" : "_",
      "prompt_text" : "_",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : "*",
      "display" : "*",
      "prompt_text" : "*",
      "font_color" : "#fff",
      "bg_color" : null
    },
    {
      "id" : null,
      "readable" : ">",
      "display" : ">",
      "prompt_text" : ">",
      "font_color" : "#fff",
      "bg_color" : null
    }
  ]

  const handleClick = (element) => {
    element.id = crypto.randomUUID();
    setPromptElements(prevState => [...prevState, element]);
  }

  return (
    <div className="step-wrapper">
      <h2 className='instruction-prompt'> Step 1: Select elements to use in your prompt. </h2>

      <div className="element-selector-menu">
         <Tabs defaultActiveKey="basic_elements" className="tabs-selector" justify>

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
            <ul className="elements-list">
              {status_elements.map(element => {
                return (
                  <li className="element-selector" onClick={() => {handleClick(element)}} key={element.readable}> { element.readable } </li>
                )
              })}
            </ul>
          </Tab>

          <Tab eventKey="dt_elements" title="Date Elements">
            <ul className="elements-list">
              {date_time_elements.map(element => {
                return (
                  <li className="element-selector" onClick={() => {handleClick(element)}} key={element.readable}> { element.readable } </li>
                )
              })}
            </ul>
          </Tab>

          <Tab eventKey="characters" title="Characters">
            <ul className="elements-list">
              {extra_characters.map(element => {
                return (
                  <li className="element-selector" onClick={() => {handleClick(element)}} key={element.readable}> { element.readable } </li>
                )
              })}
            </ul>
          </Tab>

         </Tabs>  
      </div>
    </div>
  )
}

export default ElementSelector;