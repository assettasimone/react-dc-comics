import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import footerNavs from "./data/nav";
import footerColumns from './data/footerColumns'
import comics from './data/comics'
import headerLink from './data/headerNavBtn'


function App() {

  return (
    <>
      <Header link={headerLink} />
      <Main comics={comics} />
      <Footer menu={footerNavs} columns={footerColumns} />
    </>
  )
}

export default App
