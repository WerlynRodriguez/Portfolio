import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { TProject } from "../../types";
import { GetProjects, ProjectPrefix } from "../../utils/data.util";
import { useTranslation } from "react-i18next";
import loadable from "@loadable/component";

const ProjectCard = loadable(() => import("../../components/ProjectCard"), {
  fallback: <div className="skeleton w-32 h-32"></div>,
});

export function Component() {
  const { t } = useTranslation("projects");
  const [projects, setProjects] = useState<TProject[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    GetProjects(ProjectPrefix.ALL, abortController.signal).then((data) => {
      setProjects(data);
    });

    return () => {
      console.log("aborting");
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-2xl px-8 text-left py-10">
        <h1 className="font-bold text-3xl mb-4">{t("projects")}</h1>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={`ProjectCard ${project.id}`}
              project={project}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
