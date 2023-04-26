import React, {useState} from 'react'

export default function TextForm(props) {
    const handleClick=()=>{
       // console.log("upper Case was Clicked")
       let newtext=text.toUpperCase();
      setText(newtext)
      props.showAlert("Converted to UpperCase","success")
    }
    const handleClick2=()=>{
        // console.log("upper Case was Clicked")
        let newtext=text.toLowerCase();
       setText(newtext)
       props.showAlert("Converted to Lower Case","success")
     }
     const handleClick3=()=>{
        // console.log("upper Case was Clicked")
       let newtext='';
       setText(newtext)
       props.showAlert("Remove text","success")
     }
     const handleCopy=()=>{
      // console.log("upper Case was Clicked")
     let text=document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("Copy to Clipboard","success")
     
   }
   const handleExtraSpace=()=>{
    // console.log("upper Case was Clicked")
   let newtext=text.split(/[ ]+/);
   setText(newtext.join(" "))
   props.showAlert("Remove Extra Spaces","success")
 }
    const handleChange=(event)=>{
        setText(event.target.value)
        //console.log("onchange")
       }
    const[text,setText]=useState('');
    //text="new text"//wrong way to 
   // setText("New Text");
  return (
    <>
    <div className='container' 
    style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'#042743'}} 
  value={text} onChange={handleChange} rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleClick}>Convert to upper Case</button>
<button className='btn btn-primary mx-2' onClick={handleClick2}>Convert to Lower Case</button>
<button className='btn btn-primary mx-2' onClick={handleClick3}>Clear Text</button>
 <button className='btn btn-primary mx-2'onClick={handleCopy} >Copy Text</button>
 <button className='btn btn-primary mx-2'onClick={handleExtraSpace} >Remove Extra Space</button>

    </div>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
<p>{0.008 * text.split("").length} Minutes read</p>
<h2>Preview</h2>
<p>{text .length>0?text:"Enter somthing in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
