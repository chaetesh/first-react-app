import React,{useState} from "react";
// State Components UpdateLive in react Apps

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase Was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to UpperCase!!","Success");
      }
      const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to LowerCase!!","Success");
    }
    const handleReplaceClick = ()=>{
        setText(text.replace(oldT,newT))
    }
    // Updating the Text Statevariable using event Obj
    const handleOnChange = (event)=>{
        console.log("OnChange")
        console.log(text)
        if (text == '' || text[text.length-1] == ' ') {
          event.target.value = event.target.value.trim('')
        }
        setText(event.target.value)
        setWordCount(text.split(' ').length)
        setcount(text.replace(/\s/g, ""));
    }
    const oldChange = (event)=>{
        oldText(event.target.value)
    }
    const newChange = (event)=>{
        newText(event.target.value)
    }
    
    const [text,setText] = useState('');
    const [count,setcount] = useState('');
    const [wordCount, setWordCount] = useState(0)
    const [oldT,oldText] = useState('');
    const [newT,newText] = useState('');
    // text = "new Text"; Wrong way to Update state component
    // setText("new Text"); Correct way to change State by calling state function
  return (
    <>
    <div style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          placeholder="Enter Your Text"
          className="form-control"
          id="mybox"
          rows="10"
          value={text}
          onChange={handleOnChange} // This will run when we are trying to change the Value
          // we used two brackets in this style because we are using JS inside style
          style={{backgroundColor: props.mode ==='dark'?'#141313':'white',color: props.mode ==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-outline-primary mx-2 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-outline-primary mx-2 my-3" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
      <input style={{backgroundColor: props.mode ==='dark'?'#141313':'white',color: props.mode ==='dark'?'white':'black'}} type="text" className="form-control input-group mb-3 mx-2 my-2" value={oldT} onChange={oldChange} />
      
      <input style={{backgroundColor: props.mode ==='dark'?'#141313':'white',color: props.mode ==='dark'?'white':'black'}} type="text" className="form-control input-group mb-3 mx-2 my-2" value={newT} onChange={newChange} />
      <button className="btn btn-outline-primary mx-2" onClick={handleReplaceClick}>Replace Click Again to Replace Other</button>
    
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{wordCount} Words and {count.length} Charecters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview in Italic Font</h2>
        <p className="fst-italic">{text}</p>
    </div>
    </>
  );
}