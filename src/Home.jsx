import './index.css'

function Home()
{
    return (
        <NavBar />
    )

    
}

function NavBar() {
        return <div className="flex justify-between w-full h-[10vh] pl-[6em] pr-[6em] items-center bg-white text-black">
            <div>TheBugger</div>
            <div className="NavOptions">
                <a href="" className='NavOption'>Home</a>
                <a href="" className='NavOption'>Solve</a>
                <a href="" className='NavOption'>Debug</a>
                <a href="" className='NavOption'>Learn</a>
            </div>
            <div className="flex gap-[1em] cursor-pointer">
                <div>Log in</div>
                <div>Sign up</div>
            </div>
        </div>;
    }

export default Home;