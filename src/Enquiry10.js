import React from "react";
import { useState, useEffect } from 'react';

function Enquiry10() {
    const [Enquiry, setEnquiry] = useState({});
    // Enquiry.en=[];



    useEffect(() => {
        fetch("https://localhost:44318/api/Enquiries")
            .then(res => res.json())
            .then((result) => {setEnquiry({result}); }
            );
    }, []);

    return (<div>

        <h2>Enquirys Data...</h2>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>address</th>
                    <th>mobile</th>
                    <th>alternate_mobile</th>
                    <th>email_id</th>
                    <th>enquiry_date</th>
                    <th>enquirer_query</th>
                    <th>closure_reasonID</th>
                    <th>closure_reason</th>
                    <th>processed_flag</th>
                    <th>course_id</th>
                    <th>staff_id</th>
                    <th>Student_Name</th>
                    <th>enquiry_counter</th>
                    <th>Follow_up</th>
                </tr>
            </thead>
            <tbody>

                {Enquiry.Enquiry.map(enq => {
                    
                  return(  <tr key={enq.enquiry_id}>
                        <td>{enq.enquiry_id}</td>
                        <td>{enq.enquirer_name}</td>
                        <td>{enq.enquirer_address}</td>
                        <td>{enq.enquirer_mobile}</td>
                        <td>{enq.enquirer_alternate_mobile}</td>
                        <td>{enq.enquirer_email_id}</td>
                        <td>{enq.enquiry_date}</td>
                        <td>{enq.enquirer_query}</td>
                        <td>{enq.closure_reasonID}</td>
                        <td>{enq.closure_reason}</td>
                        <td>{enq.enquiry_processed_flag}</td>
                        <td>{enq.course_id}</td>
                        <td>{enq.staff_id}</td>
                        <td>{enq.Student_Name}</td>
                        <td>{enq.enquiry_counter}</td>
                        <td>{enq.Follow_up}</td>
                        <td> <a href={'/Createenq/'}>Create</a></td>
                        <td><a href={'/enqloyee/' + enq.Id}>Details</a></td>
                        <td> <a href={'/enqloyeeUp/' + enq.Id}>Edit</a></td>
                        <td> <a href={'/enqloyeeDel/' + enq.Id}>delete</a></td>


                        


                    </tr>)
                })}

            </tbody>
        </table>
    </div>

    );
}
export default Enquiry;