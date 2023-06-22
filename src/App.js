import { Fragment, useEffect, useState } from "react";

const restApi = 'http://localhost:3000/users';

function App() {
    const [result, setResult] = useState([])
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    
    useEffect(() => {
        fetch(restApi)
            .then((res) => res.json())
            .then((result) => {
                setResult(result);
            })
            .catch(() => {
                alert('Tải dữ liệu thất bại');
            });
    }, [])

    const handleClick = (payload) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(payload)
        };
        fetch(restApi, options);
        setResult([...result, payload])
    }

    return (
        <div className="App">
            {result.map((user) => (
                <div key={user.id}>
                    <h1 style={{display: "inline"}}>{user.name}</h1>
                    <span>{user.age}</span>
                </div>
            ))}

            <input 
                placeholder="Enter name" 
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
            />
            <input 
                placeholder="Enter age" 
                value={ageValue}
                onChange={(e) => setAgeValue(e.target.value)}
            />
            <button onClick={() => nameValue==='' || ageValue==='' || handleClick({name: nameValue, age: ageValue})}>Add</button>
        </div>
    );  
}

export default App;
