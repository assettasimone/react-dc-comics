import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import footerNavs from "./data/nav";
import footerColumns from './data/footerColumns'

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer menu={footerNavs} columns={footerColumns} />
    </>
  )
}

export default App
