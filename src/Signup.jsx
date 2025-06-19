import {useState, useEffect} from 'react';

function Signup()
{
    return (
        <div class="flex flex-col w-[30vw] h-[auto] bg-white rounded-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="p-2 text-xl font-bold text-center border-b-2">Sign up</div>
            <div class="flex flex-col p-3 justify-self-end gap-2.5">
                <div class="pl-[6px]">
                    <label class="block pb-1">Set Username</label>
                    <input type="email" class="border border-gray-400 w-[98%] p-[2px] pl-[6px] rounded-sm" placeholder="Set your username"></input>
                </div>
                <div class="pl-[6px]">
                    <label class="block pb-1">Set Password</label>
                    <input type="password" class="border border-gray-400 w-[98%] p-[2px] pl-[6px] rounded-sm active:border-gray-500" placeholder="Set your password"></input>
                </div>
                <div  class="p-[4px] pb-0">
                    <button class="w-full bg-green-500 rounded-sm p-[3px] cursor-pointer">Sign up</button>
                </div>
                <div class="text-center">
                    <span>Or</span>
                </div>
            </div>
            <div class="flex flex-col justify-center gap-1 p-3 pt-0">
                <button class="bg-indigo-600 text-white rounded-sm p-[3px] text-center cursor-pointer">Sign up using Google</button>
                <button class="bg-slate-900 text-white rounded-sm p-[3px] text-center cursor-pointer">Sign up using Github</button>
            </div>
        </div>
    )
}

export default Signup