import React,{useState } from 'react'
import {trending} from '../../dummyData'
import './trending.css'
import { Home } from '../homes/Home'


export const Trending = () =>{
    const [items, setItems] = useState(trending)
    return<>
<section className='trending'>
    <Home items = {items}/>
     
    </section>
    </>
    }