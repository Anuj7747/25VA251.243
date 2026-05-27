import React, { use, useEffect, useState } from "react";

function UseEffectExample() {

    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/Anuj7747")
            .then(response => response.json())
            .then(data => setApiData(data));
    }, []);
const[timer ,setTimer]=useState(0);

    const increment=()=>{
        setTimer(timer=timer+1)
    }
    useEffect(()=>{
        setTimeout(increment,1000);
    });
    return (
        <>
            <h1 style={{ color: "red" }}>API Data</h1>

            <p>
                The useEffect hook is used to perform side effects in functional components.
            </p>

            {apiData && (
                <div>
                    <h2 style={{ color: "blue" }}>{apiData.name}</h2>
                    <img src={apiData.avatar_url} alt="profile" width="150" />
                    <p>Followers: {apiData.followers}</p>
                </div>
            )}
        </>
    );
}

export default UseEffectExample;