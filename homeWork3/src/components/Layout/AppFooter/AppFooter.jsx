import { Layout } from 'antd'
const { Footer } = Layout
import cls from './AppFooter.module.scss'
export function AppFooter() {
  return (
    <Footer
      className={cls.footer}
      style={{ textAlign: 'center', color: 'white' }}
    >
      © 2025 My Website. Все права защищены.
    </Footer>
  )
}
