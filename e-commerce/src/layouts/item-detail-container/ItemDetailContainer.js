import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/item-detail/ItemDetail";
import { products } from "../../data/data";
import { promisesDetail } from "../../helpers/promisesDetail";

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectProduct, setSelectProduct] = useState([]);

  const { itemId } = useParams();
  let numberId= Number(itemId);

  useEffect(() => {
    if (itemId) {
      console.log(products);
      promisesDetail(products, setSelectProduct, setIsLoading);
      console.log("efecto de montaje detail container");
    }
  }, [itemId]);

  return (
    <div>
      <h1>itemDetailContainer</h1>
      {isLoading && <h3>is loading...</h3>}

      {(!isLoading) && <ItemDetail  {...selectProduct.find((results) => results.id === numberId)}
      />}
      {console.log(selectProduct.find((results) => results.id === numberId))}
    </div>
  );
}

export default ItemDetailContainer;
