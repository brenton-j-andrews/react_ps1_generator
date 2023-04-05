import "./output.css";

const Output = ({ promptElements }) => {

  const convertToString = () => {
    let output = '';
    for (let i = 0; i < promptElements.length; i++) {

      const element = promptElements[i];
      const font_color_code = element.font_code
      const background_color_code = element.bg_code; 
      let formatted_string = '';

      // If font or background code is present, wrap text with formatting.
      if (font_color_code || background_color_code) {
        let color_code = '';

        if (font_color_code && background_color_code) {
          color_code = `${font_color_code};${background_color_code}`;
        }
        else {
          color_code = font_color_code || background_color_code;
        }

        formatted_string += `\\[\\e[${color_code}m\\]`;
        formatted_string += element.prompt_text;
        formatted_string += '\\[\\e[m\\]'
      }

      else {
        formatted_string += element.prompt_text
      }

      output = output.concat(formatted_string);
    }

    return output;
  }

  let outputString = `export PS1="${convertToString()}"`

  return (
    <div className="step-wrapper">
      <h2 className='instruction-prompt'> Step 4: Paste the snippet below into your bashrc document. </h2>

      <div className="output-wrapper"> 
        <textarea className="output-textarea" id="output" type="text" value={outputString} />
      </div>
    </div>
  )
}

export default Output;