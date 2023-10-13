import React from 'react'
import l1 from '../image/1.png'
import l2 from '../image/2.png'
import l3 from '../image/3.png'
import l4 from '../image/4.png'
import l5 from '../image/5.png'
import l6 from '../image/6.png'
import l7 from '../image/7.png'
import l8 from '../image/8.png'
import l9 from '../image/9.png'
import l10 from '../image/10.png'
const Second = () => {
  return (
    <div className='Second'>
        <div className='item'>
            <img src={l1} alt='1'/><p>Top Offers</p>
        </div>
        <div className='item'>
            <img src={l2} alt='2'/><p>Mobiles & Tablets</p>
        </div>
        <div className='item'>
            <img src={l3} alt='3'/><p>Electronics</p>
        </div>
        <div className='item'>
            <img src={l4} alt='4'/><p>TVs & Appliances</p>
        </div>
        <div className='item'>
            <img src={l5} alt='5'/><p>Fashion</p>
        </div>
        <div className='item'>
            <img src={l6} alt='6'/><p>Beauty</p>
        </div>
        <div className='item'>
            <img src={l7} alt='7'/><p>Home & Kitchen</p>
        </div>
        <div className='item'>
            <img src={l8} alt='8'/><p>Furniture</p>
        </div>
        <div className='item'>   
            <img src={l9} alt='9'/><p>Flights</p>
        </div>
        <div className='item'> 
            <img src={l10} alt='10'/><p>Grocery</p>
        </div>
    </div>
  );
};
export default Second;