// Creating this app by running 'npm create-react-app MY-APP' will install all related reactApp tools
import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    // This is JSX, JavaScript extension.
    // its basically html but with help of curly braces we can use JS variables
    // but we write 'className' instead of class in html as class is already defined in JS
    // <div className="temp"></div>

    // we are using this as we should only return one tag
    <>
      {/* Passing props to function */}

      <Navbar tittle="TextUtils"></Navbar>

      <div className="container my-3">
        <TextForm heading="Enter the text to Analyze"></TextForm>
        <AboutUs></AboutUs>
      </div>

    </>
  );
}

export default App;