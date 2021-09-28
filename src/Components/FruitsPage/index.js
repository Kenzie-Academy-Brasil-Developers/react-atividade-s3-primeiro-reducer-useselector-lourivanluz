//importando useSelector do react-redux
import { useSelector } from "react-redux";
import { DivStyled } from "./style";

const FruitsPage = () => {
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <DivStyled>
      {fruits.map((fruit) => (
        <p key={fruit}> {fruit} </p>
      ))}
    </DivStyled>
  );
};

export default FruitsPage;
