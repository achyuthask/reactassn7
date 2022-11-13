
import React, { useState } from 'react';
import Screen from './components/screen';
import Inputbox from './components/Inputbox';



function App() {


const [markuplang,setMarkuplang] = useState(" ")
  return (
    <div style={{display : "flex"}}
    >
      <Inputbox setdatafn = {setMarkuplang}></Inputbox>
     <Screen markupdata = {markuplang} />
  
    </div>
  );
}

export default App;
