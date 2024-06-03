import { getDictionary } from "@/app/dictionaries";
import ProjectPageView from "./page-view";

const ProjectPage = async ({ params: { lang } }) => {
  const trans = await getDictionary(lang);
  return <ProjectPageView trans={trans} />;
};

export default ProjectPage;
