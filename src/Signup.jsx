import {useState, useEffect} from 'react';

function Signup()
{
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) =>
    {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        try {
            const resp = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await resp.json();
            console.log("Signup Succesfull", data);
        }
        catch(error)
        {
            console.log("Error Signing in", error)
        }
    }

    return (
        <div className="flex flex-col w-[26vw] h-[auto] bg-white rounded-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-2 text-xl font-bold text-center border-b-2">Sign up</div>
            <div className="flex flex-col p-3 justify-self-end gap-2.5">
                <div className="pl-[6px]">
                    <label className="block pb-1">Set Username</label>
                    <input type="email" name="username" value={formData.username} onChange={handleChange}
                    className="border border-gray-400 w-[98%] p-[2px] pl-[6px] rounded-sm" placeholder="Set your username"></input>
                </div>
                <div className="pl-[6px]">
                    <label className="block pb-1">Set Password</label>
                    <input type="password"  name="password" value={formData.password} onChange={handleChange}
                    className="border border-gray-400 w-[98%] p-[2px] pl-[6px] rounded-sm active:border-gray-500" placeholder="Set your password"></input>
                </div>
                <div  className="p-[8px] pb-0">
                    <button className="w-full bg-green-500 rounded-sm p-[3px] cursor-pointer"
                     onClick={handleSubmit}
                    >Sign up</button>
                </div>
                <div className="text-center">
                    <span>Or</span>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-1 p-3 pt-0">
                <button className="bg-indigo-600 text-white rounded-sm p-[3px] text-center cursor-pointer">Sign up using Google</button>
                <button className="bg-slate-900 text-white rounded-sm p-[3px] text-center cursor-pointer">Sign up using Github</button>
            </div>
        </div>
    )
}

export default Signup