import React from "react";
import { Image} from "react-bootstrap";

function CartWidget({className,tittleCart}) {
  return (
      
    <Image className={className} title={tittleCart}
      src="https://tiendamia.com/skin/frontend/traigo/traigo/images/svg/carrito_header.svg"
      rounded
    />
  );
}

export default CartWidget;
