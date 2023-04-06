// This component displays elements selected from the menu. From here, the user can rearrange elements, select colors and delete elements. 

import { useState, useEffect} from "react";

import "./arrangement.css";
import "../../app.css";

const Arrangement = ({ promptElements, setPromptElements }) => {

  const [ selectedElement, setSelectedElement ] = useState(promptElements[promptElements.length - 1] || null);

  const [ displayFontColorPalette, setDisplayFontColorPalette ] = useState(false);
  const [ displayBackgroundColorPalette, setDisplayBackgroundColorPalette ] = useState(false);

  const colors = ["#FF0000", "#008000","#0000ff", "#FFFF00", "#00FFFF", "#FF00FF", "#000", "#fff"];

  const fontColorCodes = { 
    "#FF0000" : "31", 
    "#008000" : "32", 
    "#0000ff" : "34", 
    "#FFFF00" : "33",
    "#00FFFF" : "36",
    "#FF00FF" : "35",
    "#000" : "30",
    "#fff" : "37"
  }

  const backgroundColorCodes = {
    "#FF0000" : "41", 
    "#008000" : "42", 
    "#0000ff" : "44", 
    "#FFFF00" : "43",
    "#00FFFF" : "46",
    "#FF00FF" : "45",
    "#000" : "40",
    "#fff" : "47"
  }
  
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

  // Update element font color and reset elements to default state.
  const updateElementFontColor = (font_color, resetAll) => {
    setDisplayFontColorPalette(false);

    let updatedElements = promptElements.map(element => {

      // Reseting all tiles.
      if (resetAll) {
        setDisplayBackgroundColorPalette(false);
        return { 
          ...element, 
          font_color: font_color, 
          font_code:null, 
          bg_color: null,
          bg_code: null
        }
      } 

      // Else update 
      else {
        if (element.id === selectedElement.id) {
          return { ...element, 
            font_color:font_color, 
            font_code: fontColorCodes[font_color],
          } 
        }
        return element;
      }
    })

    setPromptElements(updatedElements);
  }

  // Update element background color. Tried to tie into above function but had issues.
  const updateElementBackgroundColor = (bg_color) => {
    setDisplayBackgroundColorPalette(false);

    let updatedElements = promptElements.map(element => {

      if (element.id === selectedElement.id) {
        return { ...element, 
          bg_color:bg_color, 
          bg_code: backgroundColorCodes[bg_color],
        } 
      }

      return element;
      }
    )

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
          <button className="delete-element-button" onClick={() => {updateElementFontColor('#fff', 'null', false)}}> Reset Tile </button>
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
                      onClick={() => {updateElementFontColor(color, null, false)}} 
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
              <div className="color-preview-box" style={{ backgroundColor : selectedElement?.bg_color }}></div>
              <i className="down-arrow" onClick={() => {setDisplayBackgroundColorPalette(!displayBackgroundColorPalette)}}></i>
            </div>

            {displayBackgroundColorPalette &&
              <div className="color-palette">
                {colors.map((color, index) => {
                  return (
                    <div
                      onClick={() => {updateElementBackgroundColor(color)}}
                      className="color-sample" 
                      style={{ backgroundColor : color }}
                      key={index} 
                    />
                  )
                })}
              </div>
            }
          </div>
        </div>

        <div className="controls-right">
          <button className="delete-element-button" onClick={() => {setPromptElements([])}}> Delete All </button>
          <button className="delete-element-button" onClick={() => {updateElementFontColor('#fff', true)}}> Reset All </button>
        </div>
      </div>
    </div>
  )
}

export default Arrangement;