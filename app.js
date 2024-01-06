import React from 'react';
import ReactDOM from 'react-dom';
import logo from './Resources/images/logo.png';


const root = ReactDOM.createRoot(document.getElementById("root"));
/*
- Header
    - App Logo 
    - Nav Links
        - Home
        - About
        - Cart
- Body 
    - Search
    - Reataurant Container
        - Restaurant Card
            - Food Image
            - Rating 
            - cuisine
            - Delivery Time

- Footer
    - copyright
    - Footer links
        - Instagram
        - Twitter
    - Address
    - Contact
*/

const RestaurantCard = () =>{
    return (
        <div className='restaurant-card'>
            <img className='card-img 'src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/89fccaa76f2f760e2742b9e53d32bb69'/>
            <h3>Behrouz Biryani</h3>
            <div className='details'>
                <h4>4.4⭐</h4>
                <h4 id='time'> <li>19 mins</li></h4>
            </div>
            <h4>North Indian, Biryani, Kebabs</h4>
        </div>
    );
}
const Header = () =>{
    return (
    <div className='nav-container'>
        <div className='app-logo'>
            <img className='logo' alt='logo-img' src={logo} />
        </div>
        <div className='nav-links'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>

    </div>
    );
}
const Body = () =>{
    return (
        <div className='body'>
            <div className='search'>
                <h3>Search</h3>
            </div> 
            <div className='restaurant-container'>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
    <div className='app'>
        <Header/>
        <Body/>
    </div>
    );
}
root.render(<AppLayout/>);