import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

function TakeFollowup() {
    const [followup, setFollowup] = useState({});
    const { Id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetch("https://localhost:44318/api/Followups/" + Id)
            .then(res => res.json())
            .then((result) => {
                setFollowup(result);
            }
            );
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFollowup(values => ({ ...values, [name]: value }))
    }

    // const handleChange1 = (event) => {
    //     const value = event.target.value;
    //     setFollowup(values => ({ ...values, [is_active]: value }))
    // }

      const handleSubmit =  (event) => {
        let demo = JSON.stringify(followup);
        console.log(JSON.parse(demo));
        fetch("https://localhost:44318/api/Followups/" + Id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(c=>console.log(c)).then(r=>console.log(r));

        fetch("https://localhost:44318/api/Enquiries/counter/" + followup.enquiry_id)
        .then(res =>{console.log(res)})
        .then((result) => {console.log(result)});
        
        navigate('/Followup');
        event.preventDefault();
    }

   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Followup Message:</label>
                <input
                    type="text"
                    name="followup_msg"
                    value={followup.followup_msg || ""}
                    onChange={handleChange}
                />
                <select name="is_active" onChange={handleChange}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <input type="submit" value="Done" />
            </form>
        </div>
    )
}
export default TakeFollowup;