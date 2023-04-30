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
    // let text=document.getElementById("myBox");
     //text.select();
     navigator.clipboard.writeText(text);
     document.getSelection().removeAllRanges();
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
    <h1 className='mb-4'>{props.heading}</h1>
    <i class="bi bi-battery-full"></i>
<div className="mb-3">
  <textarea className="form-control" id="myBox" 
  style={{backgroundColor:props.mode==='dark'?'#13466e':'white' ,color:props.mode==='dark'?'white':'#042743'}} 
  value={text} onChange={handleChange} rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClick}>Convert to upper Case</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClick2}>Convert to Lower Case</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClick3}>Clear Text</button>
 <button disabled={text.length===0} className='btn btn-primary mx-2 my-1'onClick={handleCopy} >Copy Text</button>
 <button disabled={text.length===0} className='btn btn-primary mx-2 my-1'onClick={handleExtraSpace} >Remove Extra Space</button>

    </div>

    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} 
        words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes read</p>
<h2>Preview</h2>
<p>{text .length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
