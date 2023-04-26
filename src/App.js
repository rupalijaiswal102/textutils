import { useState } from 'react';
import './App.css';
import About1 from './Components/About1';
//rfc
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { Route ,Switch} from "react-router-dom";



function App() {

  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500)

  }

 const toggleMode =()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#042743'
    showAlert("DarkMode has been enabled", "success")
  document.title=("Darkmode on") 
  }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("LightMode has been enabled", "success")
    }

  }

  return (<>

<Navbar title="TextUtiles" about="About Us" toggleMode={toggleMode} mode={mode}/>
<Alert alert={alert}/>
<div className='container my-3'>
  <Switch>
   <Route exact path='/about1'>
   <About1 />
   </Route>
    <Route exact path='/'>
<TextForm  heading="Enter the Text to analyze below"
mode={mode} showAlert={showAlert}/>
</Route>
   
</Switch>
</div>

</>
);
}

export default App;
