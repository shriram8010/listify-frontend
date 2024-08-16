import React, { useState } from 'react'
import {Routes ,Route } from 'react-router-dom';
import Category_navbar from '../components/category_navbar';
import Nav from '../components/nav';
import Product from '../components/product';
import Footer from '../components/footer';

export default function Home() {
  const [filterLocation,setFilterLocation]=useState('')
  const [search,setSearch]=useState('')
  return (
    <div>
        <Nav filterLocation={filterLocation} setFilterLocation={setFilterLocation} search={search} setSearch={setSearch}/>
        <Category_navbar/>
        <Product filterLocation={filterLocation} setFilterLocation={setFilterLocation} search={search} setSearch={setSearch}/>
        <Footer/>
        
    </div>
  )
}
