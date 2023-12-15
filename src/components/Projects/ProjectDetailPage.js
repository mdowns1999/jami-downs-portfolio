import { Link, useParams } from "react-router-dom";
import WritingDetail from "./WritingDetail";
import PhotoDetail from "./PhotoDetail";
import MarketDetail from "./MarketingDetail";
import Button from "../UI/Button";

const ProjectDetailPage = () => {
  const params = useParams();
  let name = params.name.charAt(0).toUpperCase() + params.name.slice(1);

  let content = "";
  if (params.name === "writing") {
    content = <WritingDetail id={params.id} name={params.name} />;
  } else if (params.name === "photography") {
    content = <PhotoDetail id={params.id} name={params.name} />;
  } else {
    content = <MarketDetail id={params.id} name={params.name} />;
  }

  return (
    <>
      {content}
      <div className="btnBox">
        <Button>
          <Link to={`/projects/` + params.name}>Back to {name}</Link>
        </Button>
      </div>
    </>
  );
};

export default ProjectDetailPage;
