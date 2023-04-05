// This component displays elements selected from the menu. From here, the user can rearrange elements, select colors and delete elements. 

import { useState, useEffect} from "react";

import "./arrangement.css";
import "../../app.css";

const Arrangement = ({ promptElements, setPromptElements }) => {

  const [ selectedElement, setSelectedElement ] = useState(promptElements[promptElements.length - 1] || null);

  const [ displayFontColorPalette, setDisplayFontColorPalette ] = useState(false);

  const colors = ["#FF0000", "#008000","#0000ff", "#FFFF00", "#00FFFF", "#FF00FF", "#000", "#fff"];
  
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

  // Update element color and reset a single element to default.
  const updateElementColor = (color, resetAll) => {
    setDisplayFontColorPalette(false);

    let updatedElements = promptElements.map(element => {
      if (resetAll) {
        return { ...element, font_color: color }
      } 

      else {
        if (element.id === selectedElement.id) {
          return { ...element, font_color:color } 
        }
        return element;
      }
    })

    setPromptElements(updatedElements);
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
          <button className="delete-element-button" onClick={() => {updateElementColor('#fff', false)}}> Reset Tile </button>
        </div>

        <div className="controls-center">
          <div className="font-color-selector">
            <span className="color-select-label"> Font Color </span>
            
            <div className="font-color-selector-box" >
              <div className="color-preview-box" style={{ backgroundColor : selectedElement?.font_color }}></div>
              <i className="down-arrow" onClick={() => {setDisplayFontColorPalette(!displayFontColorPalette)}}></i>
            </div>

            {displayFontColorPalette &&
              <div className="color-palette">
                {colors.map((color, index) => {
                  return (
                    <div
                      onClick={() => {updateElementColor(color, false)}} 
                      className="color-sample" 
                      style={{ backgroundColor : color }}
                      key={index} 
                    />
                  )
                })}
              </div>
            }
          </div>

          <div className="font-color-selector">
            <span className="color-select-label"> BG Color </span>
            
            <div className="font-color-selector-box">
              <i className="down-arrow"></i>
            </div>
          </div>
        </div>

        <div className="controls-right">
          <button className="delete-element-button" onClick={() => {setPromptElements([])}}> Clear All </button>
          <button className="delete-element-button" onClick={() => {updateElementColor('#fff', true)}}> Reset All </button>
        </div>
      </div>
    </div>
  )
}

export default Arrangement;