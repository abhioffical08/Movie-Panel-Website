import React from 'react';
import 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css';
import './style.css'; // Make sure this path is correct

function MoviePanel() {
  return (
    <div>
      {/* Header Section */}
      <section>
        <nav>
          <div className="logo">
            <h1>Movies<span>Hub</span></h1>
          </div>
          <div className="right">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">TV Show</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Swiper Section */}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="image">
                <div className="black">
                  <h1>Wanda vision</h1>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
                  <div className="genre">
                    <a href="#" className="category">Action</a>
                    <a href="#" className="category">Drama</a>
                    <a href="#" className="category"><span>4K</span></a>
                  </div>
                  <div className="watch">
                    <i className="fa-solid fa-play"></i>
                    <p>watch the trailer</p>
                  </div>
                </div>
                <img src="image/background_2.jpg" alt="Wanda vision" />
              </div>
            </div>
            {/* Additional swiper-slides can be added here */}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* Popular Movies Section */}
      <div className="second">
        <div className="latest">
          <h1>Popular Movies</h1>
          <div className="box">
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Gajaman</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2023</p>
                  </div>
                  <p className="category">Animation/Comedy</p>
                  <div className="info">
                    <div className="rate">
                      <i className="fa-solid fa-star"></i>
                      <p>9.2</p>
                    </div>
                    <div className="time">
                      <i className="fa-regular fa-clock"></i>
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
              <img src="image/gajaman.jpg" alt="Gajaman" />
            </div>
            {/* Additional movie cards can be added here */}
          </div>
        </div>
      </div>

      {/* Upcoming Movies Section */}
      <div className="upcoming">
        <div className="movies_box">
          <h1>Upcoming Movies</h1>
          <div className="box">
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Plane</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2023</p>
                  </div>
                  <p className="category">Action/Thriller</p>
                  <div className="info">
                    <div className="time">
                      <i className="fa-regular fa-clock"></i>
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
              <img src="image/plane.jpg" alt="Plane" />
            </div>
            {/* Additional upcoming movie cards can be added here */}
          </div>
        </div>
      </div>

      {/* TV Show Section */}
      <div className="show">
        <div className="tv_show">
          <h1>World Best TV Show</h1>
          <div className="box">
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Money Heist</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2017</p>
                  </div>
                  <p className="category">Thriller</p>
                  <div className="info">
                    <div className="rate">
                      <i className="fa-solid fa-star"></i>
                      <p>8.2</p>
                    </div>
                    <div className="time">
                      <i className="fa-regular fa-clock"></i>
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
              <img src="image/money_heist.jpg" alt="Money Heist" />
            </div>
            {/* Additional TV show cards can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePanel;
