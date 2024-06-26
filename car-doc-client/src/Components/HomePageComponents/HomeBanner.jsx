
const HomeBanner = () => {
    const image1 = 'https://i.ibb.co/yYDbGpf/1.jpg';
    const image2 = 'https://i.ibb.co/Yfg0BQn/2.jpg';
    const image3 = 'https://i.ibb.co/y5JHM24/3.jpg';
    const image4 = 'https://i.ibb.co/097gPy5/4.jpg';
    const image5 = 'https://i.ibb.co/PmyFfJm/5.jpg';
    const image6 = 'https://i.ibb.co/TTxK7c1/6.jpg';
    return (
        <div className="relative">
            {/* The Overlay of black gradient  */}
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
            {/* The banner text  */}
            <div className="absolute left-10 top-[60%] md:top-1/3 text-gray-100 z-20">
                <h2 className="text-xl md:text-5xl font-bold  md:max-w-72">Affordable price for car servicing</h2>
                <p className="mt-2 md:mt-6 max-w-xs md:max-w-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="mt-4 space-x-4 hidden md:inline-block">
                    <button className="btn btn-error font-bold">Discover More</button>
                    <button className="btn btn-outline btn-accent">Latest Project</button>
                </div>
            </div>
            {/* Carousel Items  */}
            <div className="carousel w-full h-96 md:h-[500px]">
                <div id="slide1" className="carousel-item relative w-full h-full">
                    <img src={image1} className="w-full h-full object-cover object-top" />
                    <div className="absolute flex justify-between md:justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-3/4 z-20">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-error">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-full">
                    <img src={image2} className="w-full h-full object-cover object-top" />
                    <div className="absolute flex justify-between md:justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-3/4 z-20">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-error">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-full">
                    <img src={image3} className="w-full h-full object-cover object-top" />
                    <div className="absolute flex justify-between md:justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-3/4 z-20">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-error">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-full">
                    <img src={image4} className="w-full h-full object-cover" />
                    <div className="absolute flex justify-between md:justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-3/4 z-20">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle btn-error">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full h-full">
                    <img src={image5} className="w-full h-full object-cover" />
                    <div className="absolute flex justify-between md:justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-3/4 z-20">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle btn-error">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full h-full">
                    <img src={image6} className="w-full h-full object-cover" />
                    <div className="absolute flex justify-between md:justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-3/4 z-20">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-error">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;