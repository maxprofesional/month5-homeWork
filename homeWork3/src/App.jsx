import './App.css'
import { CartList } from './components/CartList/CartList'
import product from './data/cart.json'
import productImage from './data/img.json'
import 'antd/dist/reset.css'
import { Layout } from 'antd'
import { AppHeader } from './components/Layout/AppHeader/AppHeader'
import { AppFooter } from './components/Layout/AppFooter/AppFooter'
const { Content } = Layout
function App() {
  return (
    <Layout>
      <AppHeader />
      <Content
        style={{ padding: '20px', width: 1200, margin: '20vh auto 10vh auto' }}
      >
        <CartList product={product} images={productImage} />
      </Content>
      <AppFooter />
    </Layout>
  )
}

export default App
