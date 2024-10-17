import bannerImg from '../../assets/images/Rectangle 1.png'
const Banner = () => {
    return (
        <div>
            <div className='bg-no-repeat rounded-2xl' style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className=' text-center p-40 bg-no-repeat'>
                    {/* <img src={bannerImg} alt="banner image" /> */}
                    <h2 className='text-white text-5xl'>Discover an exceptional cooking class tailored for you!</h2>
                    <p className='text-white text-xl pt-6 pb-10'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className='flex justify-center gap-3'>
                        <button>Explore Now</button>
                        <button className='bg-transparent border-2 border-current text-white ' >Our Feedback</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;