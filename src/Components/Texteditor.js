import { useState } from "react"

export default function Texteditor(props) {
    let changer=()=>
    {
     let newtext=otext.toUpperCase();
     ftext(newtext);
     
    }
    let whereitchanges=(rahul)=>
    {
        ftext(rahul.target.value)
    }

    
    let [otext,ftext]=useState("Hii this is my text")
  return (
    <div>
        
        <div class="container">
            <h1>Enter The text you Want to display</h1>
    <textarea class="form-control" rows="8" value={otext} onChange={whereitchanges}></textarea> 
    <button class="btn btn-primary" onClick={changer}>Change to Uppercase</button> 
    
    </div>
    <h1>Your Words Count</h1>
    <p> {otext.split(" ").length} words & {otext.length} Character</p>
      </div>
      
  )
}
