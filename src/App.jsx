import { useEffect, useState } from 'react';
import './App.scss';
import Main from './components/main/Main';

const App = () => {
  const [add , setAdd] = useState(false)
  useEffect(()=>{
    setTimeout(()=>setAdd(true),3200)
  },[])
  window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
  return (
    <div className="App">
      <Main add={add}/>
    </div>
  );
}

export default App;
