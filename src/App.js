import React from "react";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer greeting="Bienvenidos a la tienda" />
    </>
  );
};

export default App;
