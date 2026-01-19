import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convertd to uppercase","success")
    }
    const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
     props.showAlert("Convertd to lowercase","success")
    }
     const handleClear = ()=>{
    let newText = ''; 
    setText(newText)
    props.showAlert("Text Cleared",'success')

    }
 
   const handleRev = () => {
    setShowPreview(!showPreview);
    }
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    const handleCopy =() =>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
         props.showAlert("Copied to Clipboard","success")
    }
    const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Successfully removed extra spaces",'success')
    }
    const[text, setText] = useState('');
    const [showPreview, setShowPreview] = useState(false);
  return (
    <>
<div className="container" style ={{color:props.mode==='dark'?'white':'black'}}>   
         <h3>{props.heading}</h3>
    <div className="mb-3">     
<textarea
  className="form-control"
  value={text}
  style={{
    backgroundColor: props.mode === 'dark' ? '#686868' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black',
    border: '1px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#ced4da'
  }}
  id="myBox"
  rows="8"
  onChange={handleOnChange}
/>
    </div>
    <button className="btn btn-primary mx-2"onClick={handleUpClick} disabled={text.length === 0 }   >Convert to UpperCase</button>
    <button className="btn btn-primary mx-2"onClick={handleLoClick} disabled={text.length === 0 }>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2"onClick={handleRev} disabled={text.length === 0 }>{showPreview ? "Hide Preview" : "Preview"}</button>
    <button className="btn btn-primary mx-2"onClick={handleCopy} disabled={text.length === 0 }   >Copy Text</button>
    <button className="btn btn-primary mx-2"onClick={handleClear} disabled={text.length === 0 }>Clear Text</button>
    <button className="btn btn-primary mx-2"onClick={handleExtraSpace} disabled={text.length === 0 }>Remove Extra Spaces</button>

</div>
    <div className="container my-4"  style ={{color:props.mode==='dark'?'white':'black'}}>
        <h4>Your text summary</h4>
        <p> { text.trim() === "" ? 0 : text.trim().split(/\s+/).length } words words and {text.length} characters</p>
        <p>{text.length === 0 ? 0 : (0.008 * text.split(" ").length)} Minutes read</p>
           {showPreview && (
        <>
            <h4>Preview</h4>
            <p>{text}</p>
        </>
    )}
    </div>
    </>
  )
}
