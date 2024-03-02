import { useState } from "react"

function ColorPicker(){
    const [color,setColor] = useState("#FFFFFF");

   function handleColorChange(event){
     setColor(event.target.value);
   }

    return(
        <div className = "container">
            <h1>Pick Color</h1>
            <div className="colorDisplayed" style={{backgroundColor: color}}>
                <p>Current Color: {color}</p>
            </div>
              <label>Select a Color:</label>
              <input type="color" value = {color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker