import { useEffect } from "react";
import './index.css';

function Solve() {
  useEffect(() => {
    const wheel = document.querySelector('.problem-wheel');

    if (wheel) {
      let rotation = 0;
      const handleWheel = (event) => {
        event.preventDefault();
        const scrollAmount = event.deltaY > 0 ? -45 : 45;
        rotation += scrollAmount;
        wheel.style.transform = `rotate(${rotation}deg)`;
        wheel.style.transition = 'transform 0.5s ease-in-out';
      };

      wheel.addEventListener('wheel', handleWheel);

      return () => {
        wheel.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  useEffect(() => {
    const res = async () => {
      try {
        const userToken = localStorage.getItem('authToken');
        const response = await fetch("http://localhost:3000/solve", {
          method: "GET",
          headers: {
            'token': userToken
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Message is " + data.message);
      } catch (error) {
        console.log("Authentication failed " + error);
      }
    };

    res();
  }, []);

  return (
    <div className="flex flex-col items-center w-[15vw] h-[90vh] bg-[#1b1b1b] [&::-webkit-scrollbar]:hidden">
      <div className="text-white text-[2.5vw] font-semibold mt-[2vh] mb-[2vh] self-start pl-2">
          <span>Categories</span>
      </div>
      <div className="relative w-[15vw] h-[7vh] text-lg text-white pl-4 pt-2.5 border-b border-b-slate-400">Array</div>
      <div className="relative w-[15vw] h-[7vh] text-lg text-white pl-4 pt-2.5 border-b border-b-slate-400">Functions</div>
      <div className="relative w-[15vw] h-[7vh] text-lg text-white pl-4 pt-2.5 border-b border-b-slate-400">Strings</div>
      <div className="relative w-[15vw] h-[7vh] text-lg text-white pl-4 pt-2.5 border-b border-b-slate-400">Loops</div>
      <div className="relative w-[15vw] h-[7vh] text-lg text-white pl-4 pt-2.5 border-b border-b-slate-400">Recursion</div>
      <div className="group relative w-[15vw] h-[7vh] text-lg text-white pl-4 pt-2.5 border-b border-b-slate-400 hover:bg-[#fb0779] cursor-pointer">
          Trees
          <div className="spandiv z-2">
            <div className="problem-wheel">
                <a className="problem" style={{'--i': 1, '--clr': '#37f016'}}><span>Problem 1</span></a>
                <a className="problem" style={{'--i': 2, '--clr': '#f01637'}}><span>Problem 2</span></a>
                <a className="problem" style={{'--i': 3, '--clr': '#1637f0'}}><span>Problem 3</span></a>
                <a className="problem" style={{'--i': 4, '--clr': '#f0a637'}}><span>Problem 4</span></a>
                <a className="problem" style={{'--i': 5, '--clr': '#37f0a6'}}><span>Problem 5</span></a>
                <a className="problem" style={{'--i': 6, '--clr': '#a637f0'}}><span>Problem 6</span></a>
                <a className="problem" style={{'--i': 7, '--clr': '#f037a6'}}><span>Problem 7</span></a>
                <a className="problem" style={{'--i': 8, '--clr': '#37a6f0'}}><span>Problem 8</span></a>
                <button className="spin-button"></button>
            </div>
            </div>
      </div>
      <div className="relative w-[15vw] h-[7vh] text-lg text-white pl-4 pt-2.5 border-b border-b-slate-400">Graphs</div>
      <div className="relative w-[15vw] h-[7vh] text-lg text-white pl-4 pt-2.5 border-b border-b-slate-400">Sorting</div>
      <div className="relative w-[15vw] h-[7vh] text-lg text-white pl-4 pt-2.5 border-b border-b-slate-400">Searching</div>
      <div className="relative w-[15vw] h-[7vh] text-lg text-white pl-4 pt-2.5 border-b border-b-slate-400">Dynamic</div>
      <div className="relative w-[15vw] h-[7vh] text-lg text-white pl-4 pt-2.5 border-b border-b-slate-400">Backtracking</div>
      <div className="relative w-[15vw] h-[7vh] text-lg text-white pl-4 pt-2.5 border-b border-b-slate-400">Bit Manipulation</div>
    </div>
  );
}

export default Solve;