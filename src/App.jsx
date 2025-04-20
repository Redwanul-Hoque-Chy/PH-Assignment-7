import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/footer/Footer';
import Auction from './components/Auction/Auction';

function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Banner></Banner>
        <Auction></Auction>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
