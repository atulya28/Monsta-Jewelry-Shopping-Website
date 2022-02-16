import React from 'react'

export default function Items() {
    return (
        <main>
            <div className="items">
                <div className="first_item">
                    <img src="https://cdn.shopify.com/s/files/1/0052/4979/4151/files/banner1.jpg?v=1571898016" alt="" className='i_img'/>
                    <div className="texts">
                        <p>Design Creative</p>
                        <h1>Ring Jewelry Design</h1>
                        <span>From $60.99 – Sale 20%</span>
                    </div>
                </div>
                <div className="first_item">
                    <img src="https://cdn.shopify.com/s/files/1/0052/4979/4151/files/banner2.jpg?v=1571898040" alt="" className='i_img'/>
                    <div className="texts">
                        <p>Bestselling Products</p>
                        <h1>Victoria Diamonds</h1>
                        <span>Only from $89.00</span>
                    </div>
                </div>
                <div className="first_item">
                    <img src="https://cdn.shopify.com/s/files/1/0052/4979/4151/files/banner3.jpg?v=1571898053" alt="" className='i_img'/>
                    <div className="texts">
                        <p>Onsale Products</p>
                        <h1>Perfect Rings</h1>
                        <span>Selling Off 30%</span>
                    </div>
                </div>
            </div>
        </main>
    )
}
