import './index.css'
import HeroSection from './HeroSection'

function Home() 
{
    return ( <>
        <NavBar />
        <HeroSection />
        </>
    )
}

function NavBar() {
        return <div className="flex justify-between w-full h-[10vh] pl-0 pr-0 md:pl-[8rem] md:pr-[8rem] items-center bg-white text-black">
            <div className='text-2xl'>TheBugger</div>
            <div className="NavOptions">
                <a href="" className='NavOption'>Home</a>
                <a href="" className='NavOption'>Solve</a>
                <a href="" className='NavOption'>Debug</a>
                <a href="" className='NavOption'>Learn</a>
            </div>
            <div className="flex gap-[1em] cursor-pointer">
                <button className="bg-blue-500 md:p-2 p-[1rem] rounded-[15px] text-[16px] min-w-[3.6rem] text-white">Log in</button>
                <button className='bg-green-500 md:p-2 p-[1rem] rounded-[15px] text-[16px] min-w-[3.6rem] text-white'>Sign up</button>
            </div>
        </div>;
    }

export default Home;