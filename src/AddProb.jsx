import { useEffect, useState } from "react";


function AddProb() {
    const [formData, setFormData] = useState({
        // id: Number,
        // category: String,
        title: "",
        description: "",
        curOutput: "",
        correctOutput: "",
        // difficulty: String,
        // rawCode: String
    });

    const handleChange = (e) =>
    {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) =>
    {   
        e.preventDefault();
        if (!formData.title || !formData.description) {
            alert("Title and Description are required!");
            return;
        }
        try {
            const resp = await fetch("http://localhost:3000/admin/addProb", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (!resp.ok)
            {
                const error = await resp.text();
                console.log(`Server error to add Problem to the DB: ${error}`);
                return;
            }
            const data = await resp.json();
            console.log("Problem Added Succesfully " + data);
        }
        catch (err)
        {
            console.log("Failed to upload Problem to DB " +  err);
        }
    }

    return <>
    <div className="w-[100vw] h-[100%] grid grid-cols-2 ">
        <div className="border border-amber-500">
            <span className=" block text-[2em] w-[100%] p-[0.6rem] pl-[2rem] bg-amber-950 text-white">Add Problem</span>
            <form className="flex flex-col p-[2rem]">
                <label>Title</label>
                <input placeholder="Enter Problem Title" 
                        name = "title"
                        value = {formData.title}
                        onChange={handleChange}
                ></input>
                <label>Description</label>
                <textarea placeholder="Enter the description"
                        name = "description"
                        value = {formData.description}
                        onChange={handleChange}></textarea>
                <label>Current Output</label>
                <textarea placeholder="Enter the current code"
                        name = "curOutput"
                        value = {formData.curOutput}
                        onChange={handleChange}></textarea>
                <label>Correct Output</label>
                <textarea placeholder="Enter the correct Output"
                          name = "correctOutput"
                          value = {formData.correctOutput}
                          onChange = {handleChange}
                ></textarea>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        <div className="border border-green-500 p-[2rem]">ldkfjgk</div>
    </div>
    </>
}

export default AddProb;