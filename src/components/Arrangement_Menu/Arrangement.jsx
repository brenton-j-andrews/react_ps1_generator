// This component displays elements selected from the menu. From here, the user can rearrange elements, select colors and delete elements. 
import { useState, useEffect} from "react";



import "./arrangement.css";
import "../../app.css";

const Arrangement = ({ promptElements, setPromptElements }) => {

  const [ selectedElement, setSelectedElement ] = useState(promptElements[promptElements.length - 1] || null);
  const [ displayFontColors, setDisplayFontColors ] = useState(false);
  
  // Effect: update selected element to last element in promptElements array when it is updated.
  useEffect(() => {
    setSelectedElement(promptElements[promptElements.length - 1]);
  }, [ promptElements ])

  const handleElementClick = (element) => {
    setSelectedElement(element);
  }

  const deleteElement = () => {
    const updatedPromptElements = promptElements.filter(element => element.id !== selectedElement.id);
    setPromptElements(updatedPromptElements);
  }

  const deleteAllElements = () => {
    setPromptElements([]);
  }

  return (
    <div className="step-wrapper">
      <h2 className='instruction-prompt'> Step 2: Arrange and add colors to your elements. </h2>

      <div className="arrangement-wrapper">
        <ul className="tiles-list">
          {promptElements.map(element => {

            return (
              <li 
              className={element.id === selectedElement?.id ? "element-tile active" : "element-tile"}
              key={element.id} 
              onClick={() => {handleElementClick(element)}}
              > {element.readable } </li>
            )
          })}
        </ul>
      </div>

      <div className="arrangement-controls">

        <div className="controls-left">
          <button className="delete-element-button" onClick={deleteElement}> Delete Tile </button>
          <button className="delete-element-button"> Reset Tile </button>
        </div>

        {/* <div className="controls-center">
          <div className="font-color-selector">
            <span> Font Color: </span>
            <div className="font-color-dropdown-action">
              <div className="font-color-preview"></div>
            </div>
          </div>
        </div> */}

        <div className="controls-right">
          <button className="delete-element-button" onClick={deleteAllElements}> Clear All </button>
          <button className="delete-element-button"> Reset All </button>

        </div>
      </div>
    </div>
  )
}

export default Arrangement;