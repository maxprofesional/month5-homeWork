import { Layout, Menu } from 'antd'
const { Header } = Layout
import cls from './AppHeader.module.scss'
export const AppHeader = () => {
  const menuItems = [
    { key: '1', label: 'Главная' },
    { key: '2', label: 'Каталог' },
    { key: '3', label: 'Контакты' },
  ]

  return (
    <Header
      className={cls.header}
      style={{
        position: 'fixed',
        width: '100%',
        color: 'white',
        fontSize: '20px',
      }}
    >
      <div className="logo">Мой Логотип</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={menuItems}
      />
    </Header>
  )
}
