import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />
        <div className="home_row">
          <Product 
            title='The Lean Startup: How Todays Entrepreneurs use Continuous Innovation to create radically successful businesses' 
            price={9.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
            />
          <Product 
            title='Samsung Galaxy Book pro 360 15.6", i7, 16GB in Mystic Navy'
            price={1499.00}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYtMLgIXds4wpTAEAkXqnbrMI-HDR0-rzm8mh5_FQwrZ9tVtmbod0MHvtC4nHhOeLo9FeT99D&usqp=CAc"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product 
            title='Cross Adults Bike Helmet' 
            price={19.99} 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhC86e2Lk_4v91ebVXFAKB-GAlzxqFIR8Mcoy1Xh3NxRQRkIGpOCodmdDcjBG1lPbsohHLj4&usqp=CAc" 
            rating={5}
          />
          <Product 
            title='Cycling Jersey Mens Long Sleeves' 
            price={15.88} 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCik_dWaHjVBgS8llldHKtOQfC2VH8yqNxD8gu3zvEGV2zByz1TJa-Z4ZHPnEnBcGxmuPxw0F&usqp=CAc" 
            rating={3}/>
          <Product 
            title='Amazon echo Plus 2. Generation sprachassistent black' 
            price={167.42} 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK29EHZxBPjmpZE_XqHhAhl18cpkLVjxd2Plu-6iqQoYIX5njtJXv9p5wr&usqp=CAc" 
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product 
            title='Samsung LC49RG90SSUXEN 49" Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 X 1440' 
            price={1094.98} 
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" 
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
