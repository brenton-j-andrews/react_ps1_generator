// This component displays elements selected from the menu. From here, the user can rearrange elements, select colors and delete elements. 
import { useState } from "react";

import "./arrangement.css";
import "../../app.css";

const Arrangement = ({ promptElements }) => {

  const [ selectedElement, setSelectedElement ] = useState(null);

  const handleElementClick = (element) => {
    setSelectedElement(element);
  }

  return (
    <div className="step-wrapper">
      <h2 className='instruction-prompt'> Step 2: Arrange and add colors to your elements. </h2>

      <div className="arrangement-wrapper">
        <ul className="tiles-list">
          {promptElements.map(element => {
            return (
              <li className="element-tile" key={element.id} onClick={() => {handleElementClick(element)}}> {element.readable } </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Arrangement;