import React,{useState} from "react";
// State Components UpdateLive in react Apps

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase Was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleReplaceClick = ()=>{
        setText(text.replace(oldT,newT))
    }
    // Updating the Text Statevariable using event Obj
    const handleOnChange = (event)=>{
        console.log("OnChange")
        setText(event.target.value)
    }
    const oldChange = (event)=>{
        oldText(event.target.value)
    }
    const newChange = (event)=>{
        newText(event.target.value)
    }
    
    const [text,setText] = useState('');
    const [oldT,oldText] = useState('');
    const [newT,newText] = useState('');
    // text = "new Text"; Wrong way to Update state component
    // setText("new Text"); Correct way to change State by calling state function
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          placeholder="Enter Your Text"
          className="form-control"
          id="mybox"
          rows="10"
          value={text}
          onChange={handleOnChange} // This will run when we are trying to change the Value
        ></textarea>
      </div>
      <button className="btn btn-outline-dark mx-2 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-outline-dark mx-2 my-3" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
      <input type="text" className="form-control input-group mb-3 mx-2 my-2" value={oldT} onChange={oldChange} />
      <input type="text" className="form-control input-group mb-3 mx-2 my-2" value={newT} onChange={newChange} />
      <button className="btn btn-outline-dark mx-2" onClick={handleReplaceClick}>Replace Click Again to Replace Other</button>
    
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Charecters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview in Italic Font</h2>
        <p className="fst-italic">{text}</p>
    </div>
    </>
  );
}