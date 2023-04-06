// This component contains the menu from which you can select elements for your prompt.
import { format } from "date-fns";
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
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "Hostname",
      "display" : "host",
      "prompt_text" : "\\h",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "FQDN",
      "display" : "host.domain.com",
      "prompt_text" : "\\H",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "Shell",
      "display" : "bash",
      "prompt_text" : "\\s",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "Shell Version",
      "display" : "4.3",
      "prompt_text" : "\\v",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "Shell Release",
      "display" : "4.3.43",
      "prompt_text" : "\\V",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "Path to Current Directory",
      "display" : "~/dir",
      "prompt_text" : "\\w",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "Current Directory",
      "display" : "dir",
      "prompt_text" : "\\W",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "$",
      "display" : "$",
      "prompt_text" : "\\$",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
  ]

  const status_elements = [
    {
      "id" : null,
      "readable" : "Error Code",
      "display" : "1",
      "prompt_text" : "\\`nonzero_return\\`",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null,
      "scriptCode" : 'function nonzero_return() {\n\tRETVAL=$ ?\n\t[ $RETVAL -ne 0 ] && echo "$RETVAL"\n}\n\n'
    },
    {
      "id" : null,
      "readable" : "Git Status",
      "display" : "[master]",
      "prompt_text" : "\\`parse_git_branch\\`",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null,
      "scriptCode" : '# Copy and paste the git status snippet from EzPrompt.net, formatting this would have taken forever!\n'
    },
  ]
  
  const date_time_elements = [
    {
      "id" : null,
      "readable" : "Date",
      "display" : format(new Date(), "E LLL d"),
      "prompt_text" : "\\d",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "24HR Time",
      "display" : format(new Date(), "HH:mm"),
      "prompt_text" : "\\A",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "12HR Time",
      "display" : format(new Date(), "KK:mm a"),
      "prompt_text" : "\\@",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "24HR Time w/Seconds",
      "display" : format(new Date(), "HH:mm:ss"),
      "prompt_text" : "\\t",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "12HR Time w/Seconds",
      "display" :  format(new Date(), "KK:mm:ss a"),
      "prompt_text" : "\\T",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    }
  ]

  const extra_characters = [
    {
      "id" : null,
      "readable" : "@",
      "display" : "@",
      "prompt_text" : "@",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : ":",
      "display" : ":",
      "prompt_text" : ":",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "[",
      "display" : "[",
      "prompt_text" : "[",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "]",
      "display" : "]",
      "prompt_text" : "]",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "-",
      "display" : "-",
      "prompt_text" : "-",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "_",
      "display" : "_",
      "prompt_text" : "_",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "*",
      "display" : "*",
      "prompt_text" : "*",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : ">",
      "display" : ">",
      "prompt_text" : ">",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
    },
    {
      "id" : null,
      "readable" : "' '",
      "display" : " ",
      "prompt_text" : " ",
      "font_color" : "#fff",
      "font_code" : null,
      "bg_color" : null,
      "bg_code" : null
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