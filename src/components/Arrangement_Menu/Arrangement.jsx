/*
 * The Arrangement component displays elements selected from the menu as draggable tiles.
 * From here, the user can rearrange and delete element tiles and modify their color values.
 */

import { useState, useEffect} from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./arrangement.css";
import "../../app.css";

const Arrangement = ({ promptElements, setPromptElements }) => {

  const [ selectedElement, setSelectedElement ] = useState(promptElements[promptElements.length - 1] || null);
  
  const [ displayFontColorPalette, setDisplayFontColorPalette ] = useState(false);
  const [ displayBackgroundColorPalette, setDisplayBackgroundColorPalette ] = useState(false);

  const colors = ["#FF0000", "#008000","#0000ff", "#FFFF00", "#00FFFF", "#FF00FF", "#000", "#fff"];

  const colorCodes = { 
    "#FF0000" : ["31", "41"], 
    "#008000" : ["32", "42"], 
    "#0000ff" : ["34", "44"], 
    "#FFFF00" : ["33", "43"],
    "#00FFFF" : ["36", "46"],
    "#FF00FF" : ["35", "45"],
    "#000" : ["30", "40"],
    "#fff" : ["37", "47"]
  }

  // Effect: on change of promptElements, toggle last element as selectedElement.
  useEffect(() => {
    setSelectedElement(selectedElement || promptElements[promptElements.length - 1]);
  }, [ promptElements, selectedElement ])

  // useEffect(() => {
  //   setUpdateColorDisplay(false);
  // }, [ updateColorDisplay ])

  const handleElementClick = (element) => {
    setSelectedElement(element);
  }

  const deleteElement = () => {
    const updatedPromptElements = promptElements.filter(element => element.id !== selectedElement.id);
    setPromptElements(updatedPromptElements);
  }

  const updateElementColor = (new_font_color, new_bg_color) => {

    setDisplayFontColorPalette(false);
    setDisplayBackgroundColorPalette(false);

    let selectedIndex = null;

    let updatedElements = promptElements.map((element, index) => {
      if (element.id === selectedElement.id) {
        selectedIndex = index;
        return {
          ...element,
          font_color: new_font_color ? new_font_color : element.font_color, 
          font_code: new_font_color ? colorCodes[new_font_color][0] : element.font_code,
          bg_color: new_bg_color ? new_bg_color : element.bg_color,
          bg_code: new_bg_color ? colorCodes[new_bg_color][1] : element.bg_code
        }
      }
      return element;
    })

    setSelectedElement(updatedElements[selectedIndex]);
    setPromptElements(updatedElements);
  }

  const resetAllTiles = () => {
    let resetElements = promptElements.map(element => {
      return {
        ...element,
        font_color: '#fff',
        font_code: null,
        bg_color: null,
        bg_code: null
      }
    })

    setPromptElements(resetElements);
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(promptElements);
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);
    setPromptElements(items);
  }

  return (
    <div className="step-wrapper">
      <h2 className='instruction-prompt'> Step 2: Arrange and add colors to your elements. </h2>

      <div className="arrangement-wrapper">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="tiles-list" direction="horizontal">
            {(provided) => (
              <ul className="tiles-list" {...provided.droppableProps} ref={provided.innerRef}>
                {promptElements.map((element, index) => {
                  return (
                    <Draggable key={element.id} draggableId={element.id} index={index}>
                      {(provided) => (
                         <li 
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={element.id === selectedElement?.id ? "element-tile active-tile" : "element-tile"}
                          key={index} 
                          onClick={() => {handleElementClick(element)}}
                         > {element.readable } </li>
                      )}
                    </Draggable>
                  )
                })}

                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <div className="arrangement-controls">

        <div className="controls-left">
          <button className="delete-element-button" onClick={deleteElement}> Delete Tile </button>
          <button className="delete-element-button" onClick={() => {updateElementColor('#fff', '#000')}}> Reset Tile </button>
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
                      onClick={() => {updateElementColor(color, null)}} 
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
                      onClick={() => {updateElementColor(null, color)}}
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
          <button className="delete-element-button" onClick={resetAllTiles}> Reset All </button>
        </div>
      </div>
    </div>
  )
}

export default Arrangement;