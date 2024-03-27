import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import { TProject } from "../../types";
import { GetProjects, ProjectPrefix } from "../../utils/data.util";

export function Component() {
    const [projects, setProjects] = useState<TProject[]>([]);

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            setProjects( await GetProjects(ProjectPrefix.ALL, abortController.signal));
        })();

        return () => abortController.abort();
    }, []);

    return (
    <>
        <Header />

        <main className="mx-auto max-w-2xl px-8 text-left py-10">
            <h1 className="font-bold text-3xl mb-4">Projects</h1>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {projects.map((project, i) => <ProjectCard {...project} key={i}/>)}
            </div>
        </main>

        <Footer />
    </>
    );
}
