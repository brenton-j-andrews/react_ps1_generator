/**
 * The Preview component displays a preview of the ps1 prompt as it would appear in a bash terminal.
 */

import './preview.css';

const Preview = ({ promptElements }) => {

  return (
    <div className="step-wrapper">
      <h2 className='instruction-prompt'> Step 3: Check out the preview! </h2>

      <div className="preview-wrapper">
        {promptElements.map((element, index) => {

          return (
            <span style={{ 
              color : element.font_color, 
              backgroundColor : element.bg_color, 
              minWidth : '5px' }} 
              key={index}> 

              { element.display }
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Preview;