import {useState, useEffect} from 'react';

function Login()
{
    return (
        <div className="flex flex-col w-[30vw] h-[auto] bg-white rounded-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-2 text-xl font-bold text-center border-b-2">Login</div>
            <div className="flex flex-col p-3 justify-self-end gap-2.5">
                <div className="pl-[6px]">
                    <label className="block pb-1">Username</label>
                    <input type="email" className="border border-gray-400 w-[98%] p-[2px] pl-[6px] rounded-sm" placeholder="Enter your username"></input>
                </div>
                <div className="pl-[6px]">
                    <label className="block pb-1">Password</label>
                    <input type="password" className="border border-gray-400 w-[98%] p-[2px] pl-[6px] rounded-sm active:border-gray-500" placeholder="Enter your password"></input>
                </div>
                <div  className="p-[4px] pb-0">
                    <button className="w-full bg-green-500 rounded-sm p-[3px] cursor-pointer">Login</button>
                </div>
                <div className="text-center">
                    <span>Or</span>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-1 p-3 pt-0">
                <button className="bg-indigo-600 text-white rounded-sm p-[3px] text-center cursor-pointer">Login using Google</button>
                <button className="bg-slate-900 text-white rounded-sm p-[3px] text-center cursor-pointer">Login using Github</button>
            </div>
        </div>
    )
}

export default Login