import cls from './cart.module.scss'
import { Card, Button } from 'antd'

const { Meta } = Card

export function Cart({ url, name, description, price }) {
  return (
    <>
      <Card
        hoverable
        style={{ width: 240, height: 300 }}
        cover={
          <img
            alt={name}
            src={url}
            style={{
              width: '100%',
              height: 150,
              objectFit: 'cover',
            }}
          />
        }
      >
        <div className={cls.cart}>
          <Meta title={name} description="" />
          <Button
            type="primary"
            onClick={() =>
              alert(`
          Название: ${name}\n
          Описание: ${description}\n
          Цена: ${price}
            `)
            }
          >
            Купить
          </Button>
        </div>
      </Card>
    </>
  )
}
