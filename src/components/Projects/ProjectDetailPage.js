import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
    const params = useParams()
    return <h1>PROJECT DETAIL: {params.id}</h1>
}

export default ProjectDetailPage;