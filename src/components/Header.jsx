import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header>
    <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex items-center">
                {/* image */}
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white">eMarket</span>
            </Link>
            <div className="flex items-center gap-x-6 lg:order-2">
                <div className="flex">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border-[2.5px] border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                </div>

                <Link href="#" className="text-gray-400 hover:text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm py-2 lg:py-2.5 bg-primary-600 hover:bg-primary-700" title='User'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" fill='currentColor'><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-4,21.164v-.164c0-2.206,1.794-4,4-4s4,1.794,4,4v.164c-1.226.537-2.578.836-4,.836s-2.774-.299-4-.836Zm9.925-1.113c-.456-2.859-2.939-5.051-5.925-5.051s-5.468,2.192-5.925,5.051c-2.47-1.823-4.075-4.753-4.075-8.051C2,6.486,6.486,2,12,2s10,4.486,10,10c0,3.298-1.605,6.228-4.075,8.051Zm-5.925-15.051c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"/></svg>
                </Link>

                <Link href="#" className="hover:text-white text-gray-400 bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm py-2 lg:py-2.5 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800"  title="Cart">
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' id="Layer_1" data-name="Layer 1" fill='currentColor' viewBox="0 0 24 24"><path d="M3.69,7H0v-2H3.45l.24,2ZM0,13v2H4.63l-.24-2H0Zm3.92-4H0v2H4.16l-.24-2Zm17.67,6H8.65l.13,1.12c.06,.5,.49,.88,.99,.88h11.22v2H9.78c-1.52,0-2.8-1.14-2.98-2.65L5.21,2.88c-.06-.5-.49-.88-.99-.88H2V0h2.22c1.52,0,2.8,1.14,2.98,2.65l.04,.35H23.99l-2.4,12Zm-.04-10H7.48l.94,8h11.53l1.6-8Zm-12.55,15c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm9,0c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Z"/></svg>
                </Link>

                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link href="/" className="block py-2 pr-4 pl-3 text-gray-400 hover:text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0" aria-current="page">Men</Link>
                    </li>
                    <li>
                        <Link href="#" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Women</Link>
                    </li>
                    <li>
                        <Link href="#" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Kids</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header
