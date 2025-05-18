import React from "react";
import "./Home.css";
import FunParkCard from "./FunParkCard";
import TrendingGifts from "./TrendingGifts";
import MainData from "./MainData";

const Home = () => {



    return (
        <div className="home">
            <div className="home-content">
                <h1>Trending in Chicago </h1>
                <div className="bar1">
                    <FunParkCard image="https://img.grouponcdn.com/deal/9gFzsjeLzRfUJrio8CKxAp/hp-700x420/v1/t640x386" />
                    <FunParkCard image="https://img.grouponcdn.com/deal/31o2VpRxw5bnkpBEBWr2eR9V9GMp/31-1090x617/v1/t640x380" />
                    <FunParkCard image="https://img.grouponcdn.com/deal/YLJKx8qSDZ72zxza4kuwXWzyUYm/YL-2048x1229/v1/t640x386" />
                </div>
                <div className="bar2">
                    <div>
                        <img src="https://img.grouponcdn.com/seocms/Wp4dxphNCcvVTch4Q3VMDV/1176x654-mbnxtcard-max100kb__10__jpg-1176x654.webp/v1/t2001x1212"></img>
                        <h1 className="title-home">Save Big This May!</h1>
                        <p className="subtitle-home">Shop. Save. Repeat</p>
                        <button className="btn-home">See More</button>
                    </div>

                    <div>
                        <img src="https://img.grouponcdn.com/seocms/MLT41KCy9WyYq47jA6K65W/1176x654-mbnxtcard-max100kb__11__jpg-1176x654.webp/v1/t2001x1212"></img>
                        <h1 className="title-home">Save Big This May!</h1>
                        <p className="subtitle-home">Shop. Save. Repeat</p>
                        <button className="btn-home">See More</button>
                    </div>
                </div>
                <TrendingGifts />
                <MainData />
            </div>
        </div>
    );
};

export default Home;
