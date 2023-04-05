import './preview.css';

const Preview = ({ promptElements }) => {

  return (
    <div className="step-wrapper">
      <h2 className='instruction-prompt'> Step 3: Check out the preview! </h2>

      <div className="preview-wrapper">
        {promptElements.map((element, index) => {
          return (
            <span style={{ color : element.font_color }} key={index}> { element.display }</span>
          )
        })}
      </div>
    </div>
  )
}

export default Preview;