import React from 'react'
import Product from '../Product/Product'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://m.media-amazon.com/images/I/61-fQPtiuGL._SX3000_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            title='AmazonBasics LED TV'
            price={15999.0}
            image='https://images-eu.ssl-images-amazon.com/images/I/41tENl7qmIL._AC_SX368_.jpg'
            rating={4}
          />
          <Product
            title='TIMEX Analogs Mens Watch'
            price={1299.0}
            image='https://images-eu.ssl-images-amazon.com/images/I/51Q1tNCJgkS._AC_SR400,600_.jpg'
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
            title='Apple iPhone 13 (128GB) - Blue'
            price={59900.0}
            image='https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL640_FMwebp_QL65_.jpg'
            rating={5}
          />
          <Product
            title='2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey'
            price={107990.0}
            image='https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg'
            rating={5}
          />
          <Product
            title='Apple Watch Series 7 (GPS, 41mm) - Green Aluminium Case with Clover Sport Band - Regular'
            price={41900.0}
            image='https://m.media-amazon.com/images/I/71MQd0o+uHL._SX679_.jpg'
            rating={5}
          />
        </div>

        <div className='home__row'>
          <Product
            title='2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi + Cellular, 512GB) - Space Grey (5th Generation)'
            price={140900.0}
            image='https://m.media-amazon.com/images/I/81sxRBhe2sS._SX679_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
