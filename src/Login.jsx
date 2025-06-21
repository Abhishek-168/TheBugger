import {useState, useEffect} from 'react';


function Login()
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
        e.preventDefault();  // prevent form submit behavior
        try {
            const resp = await fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
            });

            if (!resp.ok) {
            const errorText = await resp.text();
            console.error(`Server error ${resp.status}: ${errorText}`);
            return;
            }

            const data = await resp.json();
            if (data.success) {
            localStorage.setItem('authToken', data.token);
            console.log("Login Successful", data);
            } else {
            console.log("Login failed", data);
            }

        } catch (error) {
            console.log("Error logging in", error);
        }
    };


    return (
        <div className="flex flex-col w-[26vw] h-[auto] bg-white rounded-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-2 text-xl font-bold text-center border-b-2">Login</div>
            <div className="flex flex-col p-3 justify-self-end gap-2.5">
                <div className="pl-[6px]">
                    <label className="block pb-1">Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange}
                     className="border border-gray-400 w-[98%] p-[2px] pl-[6px] rounded-sm" placeholder="Enter your username"></input>
                </div>
                <div className="pl-[6px]">
                    <label className="block pb-1">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}
                    className="border border-gray-400 w-[98%] p-[2px] pl-[6px] rounded-sm active:border-gray-500" placeholder="Enter your password"></input>
                </div>
                <div  className="p-[4px] pb-0">
                    <button className="w-full bg-green-500 rounded-sm p-[3px] cursor-pointer"
                    onClick={handleSubmit}
                    >Login</button>
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