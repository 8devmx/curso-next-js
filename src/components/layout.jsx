import Navigation from './navigation'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main id='main'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
