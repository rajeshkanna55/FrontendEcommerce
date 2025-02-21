import React from 'react'
import TopBar from '../components/TopBar'
import { Route, Routes } from 'react-router-dom'
import InfiniteScrollComponent from '../pages/ProductList'
import ShoppingCart from '../pages/Cart'
export default function Admin() {
  return (
    <div>
      <TopBar isAuthenticated={true}/>
      <Routes>
        <Route path="/products" element={<InfiniteScrollComponent/>} />
        <Route path="/my-cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  )
}
