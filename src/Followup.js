import { Component, react } from 'react'
import Staff from './Staff';

class Followup extends Component {

    constructor() {
        super();
        this.state = {
            followups: []
        }

    }
    async componentDidMount() {
        let urld = "https://localhost:44318/api/Followups";



        await fetch(urld, {
            method: 'Post',
            headers: { 'Content-type': 'application/json' },
            body: ""
        }).then(res => res).then((result) => { console.log(result); });

        fetch(urld).then(r => r.json()).then(a => { this.setState({ followups: a }) });


    }
    render() {
        return (
            <div>
                <h2>enqloyees Data...</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Followup_id</th>
                            <th>Enquiry_id</th>
                            <th>Staff_id</th>
                            <th>followup_msg</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.followups.map(enq => (
                            <tr key={enq.followup_id}>
                                <td>{enq.followup_id}</td>
                                <td>{enq.enquiry_id}</td>
                                <td>{enq.staff_id}</td>
                                <td>{enq.followup_msg}</td>
                                <td><a href={'/TakeFollowup/' + enq.followup_id}>Take_Followup</a></td>
                                {/* <td> <a href={'/enqloyeeUp/' + enq.Id}>Edit</a></td>
                                <td> <a href={'/enqloyeeDel/' + enq.Id}>delete</a></td> */}
                            </tr>
                            
                        ))}
                         

                    </tbody>
                </table>

            </div>
        );

    }
}
export default Followup;