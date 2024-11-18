'use client'

import Link from 'next/link'
import React, { useState } from 'react'

function ViewCart() {
    const [cart, setCart] = useState([])

    if(cart.length === 0) {
        return (
        <div className="bg-no-repeat bg-[position:left,_right] bg-[url('../assets/empty-cart.png'),_url('../assets/beverage.png')] bg-blend-darken bg-[rgba(0,0,0,0.4)] h-screen">
            <div className="h-full px-5 py-12 flex flex-col items-center justify-center">
                <h1 className="font-semibold text-3xl">Your cart is empty...!</h1>
                <span>Let's shop</span>
                <div className="flex mt-5">
                    <Link href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Sign in to your account</Link>
                    <Link href="#" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Sign up</Link>
                </div>
            </div>
        </div>
    )}
  return (
    <div>
      welcome
    </div>
  )
}

export default ViewCart
