import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                {/* left side */}

                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-5xl font-bold leading-snug text-black'> Buy and Sell Your Books <span className='
                    text-blue-700'> for the Best Prices</span></h2>
                    <p className='md:w-4/5'>
                        Bookstore gives you an online shopping cart and point-of-sale system for your 
                        school's bookstore. Online shoppers can browse and purchase items via the shopping interface or 
                        via Buy Now links for individual items embedded on other sites. In-person sales can be handled 
                        using Point of Sale, which works with USB barcode scanners and credit card readers. Students who want t
                        o pay later can charge their Bookstore orders to their accounts. On the back end, you can manage inventory, 
                        process online orders, and run sales reports.
                        Additionally, all Bookstore transactions are automatically fed into your General Ledger.
                    </p>

                    <div>
                        <input type='search' name='search' id='search' placeholder='Search a book' className='py-2 
                        px-2 rounded-s-sm  outline-none' />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black
                        transition-all ease-in duration-200'> Button </button>
                    </div>
                </div>

                <div> 
                    <BannerCard></BannerCard> 
                </div>

            </div>
        </div>

    )
}
export default Banner