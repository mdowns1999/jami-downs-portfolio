import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import WritingDetail from "./WritingDetail";
import PhotoDetail from "./PhotoDetail";
import MarketDetail from "./MarketingDetail";

const ProjectDetailPage = () => {
  const params = useParams();
  const name = params.name.charAt(0).toUpperCase() + params.name.slice(1);

  let content;
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
      <Box sx={{ maxWidth: 300, mx: "auto", my: 4, textAlign: "center" }}>
        <MuiButton
          variant="contained"
          component={Link}
          to={`/projects/${params.name}`}
        >
          Back to {name}
        </MuiButton>
      </Box>
    </>
  );
};

export default ProjectDetailPage;
