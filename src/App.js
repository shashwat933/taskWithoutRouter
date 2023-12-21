import logo from './logo.svg';
import './App.css';
import StudentDetail from './StudentDetail';
import { useState } from 'react';
function App() {
  const [show, setShow] = useState(false);
  const userName = "myUserName";
  const telephone = 123456789;
  const buttonHandler = () => {
    
    setShow(!show);
  }
  return (
    <div className="App">
     
      {show && <StudentDetail name={userName} tele={telephone} /> }
      <button onClick={buttonHandler}>Click me</button>
    </div>
  );
}

export default App;
