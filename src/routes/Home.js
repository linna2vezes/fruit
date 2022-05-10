

import React from "react";
import Card from "../components/Card";
import list from "../Constants/list"
import { ContainerFruits} from "../Styled";




function Home() {
  return (
    <div>
        <ContainerFruits>
      {list.map((el) => <Card image={el.image} name={el.name} price={el.price} />)}
      </ContainerFruits>
    </div>
  );
}

export default Home;

