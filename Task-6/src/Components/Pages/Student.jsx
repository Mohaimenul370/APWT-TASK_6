import { Link } from "react-router-dom";
function Student(_props) {
    return (
        <tr>
            <th scope="row">{_props.Id}</th>
            <td>{_props.Name}</td>
            <td>{_props.Cgpa}</td>
            <td><Link to={"/student/"+_props.Id}>View</Link></td>
        </tr>
    );
}

export default Student;