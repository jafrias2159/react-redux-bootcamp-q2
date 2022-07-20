import { useMemo } from 'react';

export const useGetTotals = (cartProducts) => {
  const { totalPrice, totalQuantity } = useMemo(() => {
    const { totalPrice, totalQuantity } = cartProducts.reduce(
      (accumulator, product) => {
        accumulator.totalQuantity += product.quantity;
        accumulator.totalPrice += product.quantity * product.price;
        return accumulator;
      },
      {
        totalQuantity: 0,
        totalPrice: 0,
      }
    );

    return { totalPrice: totalPrice.toFixed(2), totalQuantity };
  }, [cartProducts]);

  return { totalPrice, totalQuantity };
};
