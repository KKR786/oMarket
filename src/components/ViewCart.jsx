"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getCartProducts } from "@/helper";

function ViewCart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [products, setProducts] = useState([])
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
        if (cart.length > 0) {
          const fetchedProducts = await getCartProducts(cart);
          setProducts(fetchedProducts);
        } else {
          setProducts([]);
        }
      };

    fetchProducts();
  }, [cart]);

  console.log('show: ',products)

  const handleQty = (type, id, value) => {
    const updatedCart = [...cart];

    const productIndex = updatedCart.findIndex(item => item.id === id);
    
    if (productIndex === -1) {
        console.log("Product not found in cart.");
    } else {
        if (type === 'minus') {
            updatedCart[productIndex].quantity -= 1;
        } 
        else if ( type === 'plus') {
            updatedCart[productIndex].quantity += 1;
        }
        else if ( type === 'custom' ) {
            updatedCart[productIndex].quantity = value;
        }

        setCart(updatedCart);

        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  }

  const removeOnClick = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  const coupons = ['fifty', 'ten', 'five'];
  const applyCoupon = (e) => {
    const code = e.target.value;
    coupons.includes(code) ? setCouponDiscount('5%') : setCouponDiscount(null);
    setCouponCode(code);
  }

  if (cart.length === 0) {
    return (
      <div className="bg-no-repeat bg-[position:left,_right] bg-[url('../assets/empty-cart.png'),_url('../assets/beverage.png')] bg-blend-darken bg-[rgba(0,0,0,0.4)] h-screen">
        <div className="h-full px-5 py-12 flex flex-col items-center justify-center">
          <h1 className="font-semibold text-3xl">Your cart is empty...!</h1>
          <span>Let's shop</span>
          <div className="flex mt-5">
            <Link
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              Sign in to your account
            </Link>
            <Link
              href="#"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="p-4">
      {cart && (
        <>
          <div className="flex justify-between items-center border-b-2 border-solid border-[#eee] pb-2">
            <h1>{`Shopping Cart ( ${cart.length} ${
              cart.length > 1 ? "items" : "item"
            } )`}</h1>
          </div>

          {products && 
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map ((p, i) => {
                    const cartItem = cart.find((item) => item.id === p._id);
                    return (
                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <Image
                      src={`http://localhost:2006/${p.images[0].replace(/\\/g, "/")}`}
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt="Apple Watch"
                      width={20}
                      height={20}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {p.name}
                  </td>
                  
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${p.price}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-900 disabled:text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 disabled:cursor-not-allowed"
                        type="button"
                        disabled={cartItem && cartItem.quantity <= 1 ? true : false}
                        onClick={() => handleQty('minus', p._id)}
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="quantity"
                          className="bg-gray-50 decoration- w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1"
                          value={cartItem ? cartItem.quantity : 1}
                          onChange={(e) => handleQty('custom', p._id, Math.max(1, e.target.value))}
                          min={1}
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                        onClick={() => handleQty('plus', p._id)}
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>

                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${p.price * cartItem?.quantity}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => removeOnClick(p._id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>)})}
              </tbody>
            </table>
            <div className="flex flex-col gap-y-4 justify-end float-right w-2/5 px-5 py-4">
                <div className="flex justify-between items-center w-full">
                    <span>Subtotal:</span>
                    <span>
                    ${products.reduce((acc, p) => {
                        const cartItem = cart.find((item) => item.id === p._id);
                        return acc + (cartItem ? p.price * cartItem.quantity : 0);
                    }, 0)}
                    </span>
                </div>
                <div className="flex justify-between items-center w-full">
                    <span>Coupon code:</span>
                    <span className="underline cursor-pointer after:absolute after:w-full after:" onClick={() => setShowCoupon(!showCoupon)}>{!showCoupon ? (couponDiscount ? 'Coupon applied' : 'Add coupon') : 'cancel'}</span>
                </div>
                {showCoupon && <>
                    <div className="flex justify-between items-center w-full">
                        <input type="text" className="w-[78%] bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-[0.6rem] ps-5" value={couponCode} onChange={applyCoupon}/>
                        <button className="ml-[2%] w-[20%] bg-[#f02640] border-[#f02640] px-[1.5rem] py-[.6rem] text-white rounded-lg text-[12px]">Apply</button>
                    </div>
                    {couponDiscount && 
                        <span className="text-green-900">Coupon applied</span>
                    }</>
                }
                <div className="flex justify-between items-center w-full">
                    <span>Grand total:</span>
                    <span className="font-semibold">
                    ${(() => {
                        const subtotal = products.reduce((acc, p) => {
                        const cartItem = cart.find((item) => item.id === p._id);
                        return acc + (cartItem ? p.price * cartItem.quantity : 0);
                        }, 0);
                        
                        const discount = couponDiscount ? parseFloat(couponDiscount) : 0;

                        const totalAfterDiscount = subtotal * (1 - discount / 100);

                        return totalAfterDiscount.toFixed(2);
                    })()}
                    </span>
                </div>
                <button className="bg-[#f02640] border-[#f02640] px-[1.5rem] py-[.6rem] text-white rounded-lg">Checkout</button>
            </div>
          </div>}
        </>
      )}
    </div>
  );
}

export default ViewCart;
