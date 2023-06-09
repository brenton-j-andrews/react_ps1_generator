/**
 * The Output component generates the code snippet to be placed in the 
 * .bashrc file which will generate the ps1 prompt shown the the preview.
 */

import "./output.css";

const Output = ({ promptElements }) => {

  const convertElementsToString = () => {

    let formatting_snippet = "";
    
    let output = `\nexport PS1=`;

    for (let i = 0; i < promptElements.length; i++) {
      const element = promptElements[i];
      const font_color_code = element.font_code
      const background_color_code = element.bg_code; 
      let formatted_string = '';

      if (element.scriptCode) {
        output = element.scriptCode + output;
      }

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

      formatting_snippet = formatting_snippet.concat(formatted_string);
    }

    formatting_snippet = '"' + formatting_snippet + '"';
    output = output.concat(formatting_snippet);

    return output;
  }

  let outputString = convertElementsToString()

  return (
    <div className="step-wrapper">
      <h2 className='instruction-prompt'> Step 4: Paste the snippet below into your bashrc document. </h2>

      <div className="output-wrapper"> 
        <textarea readOnly className="output-textarea" id="output" type="text" value={outputString} />
      </div>
    </div>
  )
}

export default Output;