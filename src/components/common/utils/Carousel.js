import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide myCarousel" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://www.x-cart.com/wp-content/uploads/2020/06/How_the_best_ecommerce_sites_win_at_web_design.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.x-cart.com/wp-content/uploads/2020/06/How_the_best_ecommerce_sites_win_at_web_design.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.x-cart.com/wp-content/uploads/2020/06/How_the_best_ecommerce_sites_win_at_web_design.jpg" alt="Third slide" />
                </div>
            </div>
            {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a> */}
        </div>
    )
}

export default Carousel
