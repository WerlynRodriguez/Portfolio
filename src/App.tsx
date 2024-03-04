import { useTranslation, Trans } from "react-i18next";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import InputCopy from "./components/InputCopy";
import {
    PaperAirplaneIcon,
    EnvelopeIcon,
    BriefcaseIcon,
    PlusIcon,
    UserIcon,
    PuzzlePieceIcon,
    PencilIcon,
    DocumentCheckIcon,
    AcademicCapIcon,
    DocumentIcon,
} from "@heroicons/react/24/solid";
import Dialog from "./components/Dialog";
import SectionList from "./components/SectionList";
import BtnSkill from "./components/BtnSkill";
import { ISectionData, TCertificate, TSkill } from "./types";
import ProjectCard from "./components/ProjectCard";

import SimpleIcon from "./components/SimpleIcon";
import { getIcon } from "./iconUtils";
import Certification from "./components/Certification";

import "./app.css";

/**
 * @todo Move all info to public/data
 * @todo Add React Router
 * @todo Add a new route "/projects"
 * @todo Add "more projects" button functionality
 * @todo Add a new route "/projects/:name"
 * @todo Add "paper airplane" decoration (floating around the page)
 * @todo Repair CSS paper pattern
 */

const myGmail = "rdwerlynjose.16@gmail.com";

const skills: { [key: string]: TSkill } = {
    all: {
        Javascript: ["Typescript", "Jquery"],
        React: ["Antdesign", "Graphql", "I18next", "Reactrouter", "Redux", "Semanticuireact", "Socketdotio", "Vite", "Zustand", "Axios"],
        Tailwindcss: ["Daisyui"],
        Nodedotjs: ["Express", "JSONWebTokens", "Mongoose", "Nodemon", "Npm", "Yarn", "Socketdotio", "Webpack", "Cron", "Dotenv"],
        Dotnet: ["Csharp", "C", "Cplusplus", "Graphql", "JSONWebTokens"],
        ReactNative: ["Expo", "ReactNativePaper"],
        Git: ["Github", "Githubactions", "Githubpages", "Githubcopilot"],
        Python: ["Django", "Flask"],
        Kotlin: [],
        Mongodb: ["Mongoose"],
        Sql: ["Mysql", "Sqlite", "SqlServer"],
    },
    learning: {
        Nextdotjs: [],
        Svelte: [],
        Vuedotjs: [],
        Astro: [],
        Htmx: []

    }
}

const projects = [
    {
        title: "Sistema web Nancurunaisa",
        desc: "Sistema web de gestión de servicios terapéuticos para clínica oriental Nancurunaisa",
        techs: ["React", "Dotnet", "Graphql"],
        img: "/images/banner_project_nancu_low.webp?url"
        //img: "public\images\banner_project_nancu.png"
    }, {
        title: "Rimember",
        desc: "Aplicación para Android que permite ver videos y fotos de tu galería de manera aleatoria",
        techs: ["React", "Expo", "I18next"],
        img: "/images/banner_project_rimem_low.webp?url"
    }, {
        title: "ActiviTracker",
        desc: "Aplicación web para el seguimiento de actividad de usuarios. Registrando el historial de los plazos activos en la app.",
        techs: ["React", "Express", "Mongodb"],
        img: "/images/banner_project_activ_low.webp?url"
    }
]

export default function App() {
    const { t } = useTranslation();
    const [selectedSkill, setSelectedSkill] = useState<string>("");
    const [selectedSection, setSelectedSection] = useState<string>("");

    const [certificateData, setCertificateData] = useState<TCertificate[]>([]);

    const [selectedCert, setSelectedCert] = useState<number>(0);

    const landSections: { [key: string]: ISectionData } = Object.freeze({
        about: {
            key: "about",
            label: t('about')
        },
        skills: {
            key: "skills",
            label: t('skills')
        },
        projects: {
            key: "projects",
            label: t('projects')
        },
        certifications: {
            key: "certifications",
            label: t('certifications')
        },
        contact: {
            key: "contact",
            label: t('contact')
        }
    })

    useEffect(() => {
        const certificateUrl = "/data/certifications.json?url";
        const abortController = new AbortController();

        fetch(certificateUrl, { signal: abortController.signal })
            .then(response => response.json())
            .then(data => setCertificateData(data))
            .catch(error => console.error(error));

        return () => abortController.abort();
    }, []);

    /**
     * Use this function to render a skill button
     */
    function SectionSkill(props: { skill: string, section: string }) {
        const { skill, section } = props;
        return (
            <BtnSkill
                iconName={skill}
                badge={skills[section][skill].length || undefined}
                onClick={() => {
                    if (skills[section][skill].length === 0) return;

                    setSelectedSkill(skill);
                    setSelectedSection(section);
                }}
            />
        )
    }

    return (<>
        <Header/>

        <main>
        
            <section id="banner" className="hero min-h-96">
                <div className="hero-content flex-col gap-2 lg:flex-row lg:gap-16">
                    <div className="max-w-md text-center bg-transparent backdrop-blur-sm rounded-lg">
                        <h1 className="text-5xl lg:text-6xl font-bold text-pretty [&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-purple-700/20">
                            {t('salute')}
                        </h1>
                        <p className="text-balance text-base-content/70 font-title py-4 font-light md:text-lg xl:text-2xl">
                            {t('saluteDesc')}
                        </p>
                    </div>
                    <a className="btn btn-primary lg:btn-lg" href="#contact">
                        {t('saluteAction')}
                        <EnvelopeIcon className="w-5 h-5"/>
                    </a>
                </div>
            </section>

            <section id={landSections.about.key} className="land-section">
                <div className="wrapper-content">
                    <h1 className="title">
                        <UserIcon className="fill-sky-600"/>
                        {landSections.about.label}
                    </h1>
                    
                    <p className="py-6">
                        {t('aboutDesc')}
                    </p>
                </div>
            </section>

            <section id={landSections.skills.key} className="land-section">
                <div className="wrapper-content">
                    <h1 className="title">
                        <PuzzlePieceIcon className="fill-amber-600"/>
                        {landSections.skills.label}
                    </h1>
                    <blockquote>
                        {t('skillsHint')} (<kbd>Click</kbd>)
                    </blockquote>

                    <SectionList
                        label={t('all')}
                        icon={<DocumentCheckIcon/>}
                        data={Object.keys(skills.all).sort()}
                        renderItem={(skill, i) => 
                            <SectionSkill skill={skill} section="all" key={i}/>
                        }
                    />

                    <SectionList
                        label={t('learning')}
                        icon={<PencilIcon/>}
                        data={Object.keys(skills.learning).sort()}
                        renderItem={(skill, i) => 
                            <SectionSkill skill={skill} section="learning" key={i}/>
                        }
                    />
                </div>
            </section>

            <section id={landSections.projects.key} className="land-section">
                <div className="wrapper-content">
                    <h1 className="title">
                        <BriefcaseIcon className="fill-blue-600"/>
                        {landSections.projects.label}
                    </h1>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        {projects.map((project, i) => <ProjectCard {...project} key={i}/>)}
                        <div className="card bg-base-100">
                            <div className="card-body">
                                <button className="btn xs:btn-sm lg:btn-md btn-primary">
                                    <PlusIcon className="w-5 h-5"/>
                                    Ver más
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id={landSections.certifications.key} className="land-section">
                <div className="wrapper-content">
                    <h1 className="title">
                        <DocumentIcon className="fill-green-600"/>
                        {landSections.certifications.label}
                    </h1>

                    <div className="grid place-items-center w-full py-4 paper-pattern">
                        <Certification {...certificateData[selectedCert]}/>
                    </div>

                    <div className="list-flex-wrap justify-center pt-4">
                        {certificateData.map((cert, i) =>
                            <BtnSkill
                                className={i === selectedCert ? "btn-primary" : ""}
                                iconName={cert.icon} 
                                key={i} 
                                onClick={() => setSelectedCert(i)}
                            />
                        )}
                    </div>
                </div>

            </section>

            <section id={landSections.contact.key} className="land-section">
                <div className="wrapper-content">
                    <h1 className="title">
                        <EnvelopeIcon className="w-8 h-8 fill-green-600"/>
                        {landSections.contact.label}
                    </h1>

                    <p className="py-6">
                        {t('contactDesc')}
                    </p>
                    
                    <div className="join">
                        <InputCopy className="join-item" label={myGmail}/>

                        <a
                            className="btn btn-primary join-item" 
                            target="_blank" 
                            href={`mailto:${myGmail}`} 
                            aria-label={t('contactAction')}
                        >
                            <PaperAirplaneIcon className="w-5 h-5"/>
                        </a>
                    </div>
                </div>
            </section>
        </main>

        <footer className="footer footer-center p-10 bg-base-200 text-base-content">
            <nav className="grid grid-flow-col gap-4">
                {Object.keys(landSections).map((section, i) =>
                    <a className="link link-hover" href={`#${landSections[section].key}`} key={i}>
                        {landSections[section].label}
                    </a>
                )}
            </nav>

            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className="btn btn-ghost" href="https://github.com/WerlynRodriguez" target="_blank">
                        <SimpleIcon className="w-6 h-6" path={getIcon("Github").path}/>
                        Github
                    </a>

                    <a className="btn btn-ghost" href="https://www.linkedin.com/in/werlyn-rodriguez-760007183/" target="_blank">
                        <SimpleIcon className="w-6 h-6" path={getIcon("Linkedin").path}/>
                        Linkedin
                    </a>
                </div>
            </nav>

            <aside>
                <p>
                    2024 - {t('designedBy')} <a className="link" href="https://github.com/WerlynRodriguez" target="_blank">Werlyn</a> ♥
                    <br/>
                    <a className="link" href="https://github.com/WerlynRodriguez/Portfolio" target="_blank"> Portfolio code </a>
                </p>
            </aside>
        </footer>

        <Dialog
            id="dialogSkills"
            title={`${t('relatedTo')} ${selectedSkill}:`}
            open={selectedSkill !== ""}
            onClose={() => setSelectedSkill("")}
        >
            {selectedSkill && selectedSection && (
                <div className="list-flex-wrap">
                    {skills[selectedSection][selectedSkill].sort().map((subskill, i) =>
                        <BtnSkill iconName={subskill}/>
                    )}
                </div>
            )}
        </Dialog>
    </>)
}