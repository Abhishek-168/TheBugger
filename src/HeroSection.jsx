

function HeroSection()
{
    return ( <>
        <SearchSec />
        <MainCards />
        
        </>
    )
}

function SearchSec()
{
    return (
        <div className="flex justify-center absolute left-1/2 top-[36%] -translate-x-1/2 -translate-y-1/2">
            <img src="magnifying-glass-solid.svg" className="w-[1.3em] absolute left-[1rem] top-[50%] -translate-y-1/2"></img>
            <input type="text" placeholder="Search for buggy code" className="w-[45vw] h-[4vw] p-[1.5rem] pl-[3.2rem] bg-white
                rounded-[2rem]"></input>
        </div>
    )
}

function MainCards()
{
    return (
        <div className="CardsParent">
            <div className="Cards">
                <div className="flex gap-2">
                    <span className="text-2xl">Solve</span>
                    <img src="link.svg" className="w-[1.6rem] h-[1.6rem]"></img>
                </div>
                <div className="w-[16vw] h-[16vw] bg-slate-600"></div>
            </div>
            <div className="Cards">
                <div className="flex gap-2">
                    <span className="text-2xl">Debug</span>
                    <img src="link.svg" className="w-[1.6rem] h-[1.6rem] fill-white"></img>
                </div>
                <div className="w-[16vw] h-[16vw] bg-slate-600"></div>
            </div>
            <div className="Cards">
               <div className="flex gap-2">
                    <span className="text-2xl">Learn</span>
                    <img src="link.svg" className="w-[1.6rem] h-[1.6rem]"></img>
                </div>
                <div className="w-[16vw] h-[16vw] bg-slate-600"></div>
            </div>
        </div>
    )
}

export default HeroSection;