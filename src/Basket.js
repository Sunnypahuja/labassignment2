import React from 'react';

export default function Basket(props) {
  const { prods = [] } = props;
  return (
    <div className="block">
      <h2>Cart Items</h2>
      {prods.map((prod) => {
        if (prod.value > 0) {
          return (
            <div className="border d-flex align-items-start">
              <img src={prod.image} alt={prod.desc} width="150" />
              <p className="qty d-inline mx-5 justify-content-center">
                Quantity: {prod.value}
              </p>
              <p className="px-4">{prod.desc}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
