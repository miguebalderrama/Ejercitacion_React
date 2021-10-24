import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../../components/item-detail/ItemDetail";
import { item } from "../../data/dataItem";
import { promises } from "../../helpers/promises";

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentProducts, setCurrentProducts] = useState({});
  const getItem = () => {
    if (item) {
      promises(item, setCurrentProducts, setIsLoading);
    }
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <div>
      <h1>itemDetailContainer</h1>
      {isLoading && <h3>is loading...</h3>}
      <ItemDetail {...currentProducts} />
    </div>
  );
}

export default ItemDetailContainer;
