import React from "react";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer props="Bienvenidos a la tienda" />
    </>
  );
};

export default App;
