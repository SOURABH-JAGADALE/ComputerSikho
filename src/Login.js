import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function Login() {
    const [username, setUsername] = useState({});
    const [password, setPassword] = useState({});
    const [is_log, setIs_log] = useState({});
    let navigate = useNavigate();

    const handleChange1 = (event) => {
        // const name = event.target.name;
        const value = event.target.value;
        // setUsername(values => ({ ...values, [name]: value }))
        setUsername(values => ({ ...values, [username]: value }))
    }
    const handleChange2 = (event) => {
        // const name = event.target.name;
        const value = event.target.value;
        setPassword(values => ({ ...values, [password]: value }))
    }


    const handleSubmit = (event) => {

        fetch("https://localhost:44318/api/Staffs/Login/" + username + "/" + password).
            then(r => r.json()).then(result =>{setIs_log(result)})
        console.log(is_log);
        if(!is_log.is_log)
        navigate('/Staff');
        else
        navigate('/');
        // event.preventDefault();

    }
    return (
        <div>
            <h1>Hello World</h1>
            <form onSubmit={handleSubmit}>

                <br />            <label>username:</label>
                <input
                    type="text"
                    name="username"
                    // value={username.username}
                    onChange={handleChange1}
                />
                <br />            <label>password:</label>
                <input
                    type="password"
                    name="password"
                    // value={password.password}
                    onChange={handleChange2}

                />

                <input type="submit" value="Login" />
            </form>
        </div>
    )

}

export default Login;