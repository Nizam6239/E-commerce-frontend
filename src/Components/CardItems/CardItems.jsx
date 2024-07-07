import React, { useContext } from 'react'
import './CardItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CardItems = () => {
    const {getTotalCartAmount,all_product,cardItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='carditems'>
        <div className="carditems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cardItems[e.id]>0){
                return <div>
                        <div className="carditems-format carditems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon'/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='carditems-quantity'>{cardItems[e.id]}</button>
                            <p>${e.new_price*cardItems[e.id]}</p>
                            <img className='carditems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
            }
            return null;
        })}
        <div className="carditems-down">
            <div className="carditems-total">
                <h1>Card Totals</h1>
                <div>
                    <div className="carditems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="carditems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="carditems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="carditems-promo">
                <p>If you have a promo code, Enter it here</p>
                <div className="carditems-promobox">
                    <input type="text" placeholder='promo code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
