import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

import FireHooks from '../../Hooks/Hooks';


const Header = () => {
    const{user,singinIthgoogle}=FireHooks();
    return (
        <div className='header'>
            <Link to='/'>HOME</Link>
            <Link to='/products'>PRODUCTS</Link>
            <Link to='/order'>ORDERS</Link>
            <Link to='/register'>REGISTER</Link>
            {
                
                user?.uid?<button onClick={singinIthgoogle}>sing out</button>:
              
                <Link to='/login'>LOGIN</Link>
            }
           
        
        </div>
    );
};

export default Header;