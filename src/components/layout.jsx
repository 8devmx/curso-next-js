import Navigation from './navigation'
import Footer from './footer'

const Layout = ({ children, cart }) => {
  return (
    <>
      <Navigation />
      <main id='main'>{children}</main>
      <Footer cart={cart} />
    </>
  )
}

export default Layout
