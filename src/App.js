import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom"; 

function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message, type) =>{
  setAlert({
    msg : message,
    type : type
  })
  setTimeout(() => {
  setAlert(null);
}, 1500);
}

const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
    //This is for changing the title dynamically   
    // document.title ="TextUtils - Dark mode"-------(Changes the text on the tab)
    // setInterval(() => {
    //     document.title ="TextUtils is Amazing "
    // }, 2000);
    //  setInterval(() => {
    //     document.title ="Install TextUtils now "
    // }, 1500);
    
  }else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
     showAlert("Light mode has been enabled","success");
    //  document.title = "TextUtils - Light mode"-----(changes the text on the tab)
  }
}

const redToggleMode = () =>{
  if(mode === 'light'){
    setMode('red')
    document.body.style.backgroundColor = '#f74d4d';
    showAlert("Dark mode has been enabled","success");
  }else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
     showAlert("Light mode has been enabled","success");
  }
}
  return (
    <>
     
{/* <Router> */}
<Navbar title="TextManipulator" aboutMe ="About our Service" mode={mode} toggleMode={toggleMode} redToggleMode={redToggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  {/* /users --> Component 1
      /users/Home --> Component 2 */}
   {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading ="Enter you text here to analyze below" mode ={mode}/> 
          {/* </Route>
        </Switch> */}
</div>
{/* </Router> */}

   </>
  );
}

export default App;
 