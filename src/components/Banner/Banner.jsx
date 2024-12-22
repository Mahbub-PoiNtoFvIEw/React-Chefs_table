import banner from '../../assets/images/banner2.jpeg';
const Banner = () => {
    return (
        <div className='bg-center bg-no-repeat bg-cover flex flex-col gap-8 justify-center items-center lg:mx-16 mx-2 py-16 rounded-2xl px-4 text-[#FFFFFF] text-center' style={{backgroundImage: `url(${banner})`}}>
            <h3 className='text-4xl font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h3>
            <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
            <div className='space-x-6 space-y-4 font-bold'>
                <button className='btn bg-[#0BE58A] rounded-3xl py-2 px-8 text-[#150B2B]'>Explore Now</button>
                <button className='btn border-[1px] border-[#FFFFFF] rounded-3xl py-2 px-8'>Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;