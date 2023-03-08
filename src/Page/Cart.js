import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const {cartItems,quantity,totalAmount} =useSelector((state)=>state.cart)
    return (
        <>
        abc
        {cartItems.map((a)=>
        <>
        id:{a.id}
        title:{a.title}
        </>)}
        </>
    );
}
