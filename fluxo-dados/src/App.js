import StyledGlobal, { AppComponent, Text} from './styledGlobal';
import React, { useState } from 'react';
import Filho from "./components/Filho/Filho";

function App() {
  const [texto, SetStatus] = useState('Estado Original - App (Pai)');
  
  return (
   <AppComponent>
      <StyledGlobal/>
      <p>App (Pai)</p>
      <Text>{texto}</Text>
      <Filho SetStatus={SetStatus}/>
   </AppComponent>
  );
}

export default App;

