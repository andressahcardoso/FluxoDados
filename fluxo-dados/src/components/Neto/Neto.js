import {NetoComponent} from "./styled"
import Bisneto from "../Bisneto/Bisneto";

function Neto({ SetStatus }) {
    return (
      <NetoComponent>
          <p>Neto</p>
          <Bisneto SetStatus={SetStatus}/>
      </NetoComponent>
    );
  }
  
  export default Neto;
  