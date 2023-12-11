import { Link, useParams } from 'react-router-dom';
import classes from './ProjectList.module.css';

const ProjectList = () => {
    const params = useParams();
    
    return <ul>
        <li><Link to={`${"ph1"}`}>LINK</Link></li>
        <li>{params.name}</li>
        <li>ITEM</li>
        <li>ITEM</li>
    </ul>
}

export default ProjectList;