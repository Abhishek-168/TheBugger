import { useEffect } from "react";

function Solve() {
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
      } 
      catch (error) {
        console.log("Authentication failed " + error);
      }
    };

    res();
  }, []);

  return (
    <div>
      <span className="text-white">Message from Solve Component</span>
    </div>
  )
}

export default Solve;
