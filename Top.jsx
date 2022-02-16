import React from 'react'
import logo from './logo.png'
import search from './search.png'
import cart from './cart.png'

export default function Top() {
    let left = 0
    setInterval(function () {
        document.getElementById('sec').ondragstart = (e) => {
            left += 50
            // document.getElementById('f_m').style.left = left + 'px'
            // document.getElementById('r_m').style.left = '50vh'
        }
    }, 100)

    return (
        <>
            <div className="nav_top">
                <p className="a1">Free shipping on all domestic orders with coupon code <span className="code"> Watches2021</span></p>
                <div className="nav_end">
                    <button href="" className="usd">BDT</button>
                    <a href="" className="usd2">My Account</a>
                </div>
            </div>
            <div className="part2">
                <div className="aa1">
                    <p className="aa12">LOCATION</p>
                    <p className="aa13">Street 12345 – USA</p>
                </div>
                <div className="bb1">
                    <p className="bb12">CALL FREE</p>
                    <p className="bb13">123 456 789 000</p>
                </div>
                <img src={logo} alt="" className="logo" />
                <div className="side">
                    <button className="sear"><img src={search} className="pic" alt="" /></button>
                    <button className="sear2"><img src={cart} className="pic" alt="" /></button>
                </div>
            </div>
            <div className="nav_bottom">
                <p className="items1">HOME</p>
                <p className="items2">PRODUCT</p>
                <p className="items3">SHOP</p>
                <p className="items4">BLOG</p>
                <p className="items5">PAGES</p>
            </div>
            <div className="second" id='sec'>
                <div className="first_main" id='f_m' style={{position: 'relative'}}>
                    <img src="https://cdn.shopify.com/s/files/1/0052/4979/4151/files/slider2.jpg?v=1571898401" alt="" className="ring" id='r1' />
                    <div className="write">
                        <p className="exc1">Exclusive offer - 10% Off This Week</p>
                        <p className="exc2">Engagement Ring</p>
                        <p className="exc3">Highlight Text Before Title <span className="exc4">$2.199.00</span></p>
                        <button className="shop">SHOP NOW</button>
                    </div>
                </div>

                <div className="second_main" id='s_m' style={{position: 'relative'}}>
                    <img src="https://cdn.shopify.com/s/files/1/0052/4979/4151/files/slider1.jpg?v=1571898380" alt="" className="ring2" id='r2' />
                    <div className="write1">
                        <p className="exc1">Exclusive offer -10% off this week</p>
                        <p className="exc2">Jewelry arrivals</p>
                        <p className="exc3">Highlight Text Before Title <span className="exc4">$2.199.00</span></p>
                        <button className="shop">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </>
    )
}
