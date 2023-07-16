import {BisnetoComponent, Text, BtnAtualiza} from "./styled"

function Bisneto({SetStatus}) {
    const MudarStatus = () => {
        SetStatus("O estado do app foi atualizado! ");
    }

    return (
     <BisnetoComponent>
        <p>Bisneto</p>
        <Text>Botão do component Bisneto</Text>
        <Text>Clique para atualizar o estado do pai</Text>
        <BtnAtualiza onClick={MudarStatus}>Atualizar estado</BtnAtualiza>
     </BisnetoComponent>
    );
  }
  
  export default Bisneto;
  