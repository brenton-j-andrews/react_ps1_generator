import './preview.css';

const Preview = ({ promptElements }) => {

  const previewString = () => {
    let string = "";

    for (let i = 0; i < promptElements.length; i++) {
      string = string.concat(promptElements[i].display);
    }
   
    return string;
  }

  return (
    <div className="step-wrapper">
      <h2 className='instruction-prompt'> Step 3: Check out the preview! </h2>

      <div className="preview-wrapper">
        <p className='preview-string'> {previewString()} </p>
      </div>
    </div>
  )
}

export default Preview;