import React from 'react'
import { Cart } from '../Cart/Cart'
import cls from './cartList.module.scss'

function randomizer(array) {
  return array.sort(() => Math.random() - 0.5)
}

export function CartList({ product, images }) {
  const randomArrIndex = randomizer([...Array(images.length).keys()])

  return (
    <div className={cls.card_wrapper}>
      {product.map((item, index) => {
        return (
          <Cart
            key={item.id}
            name={item.name}
            url={images[randomArrIndex[index]].url}
            description={item.description}
            price={item.price}
          />
        )
      })}
    </div>
  )
}
