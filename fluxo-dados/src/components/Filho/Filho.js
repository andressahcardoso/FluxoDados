import {FilhoComponent} from "./styled"
import Neto from "../Neto/Neto";

function Filho({ SetStatus }) {
    return (
        <FilhoComponent>
            <p>Filho</p>
            <Neto SetStatus={SetStatus}/>
        </FilhoComponent>
    );
  }
  
  export default Filho;
  