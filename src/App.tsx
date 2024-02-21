import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";
import Header from "./components/Header";
import InputCopy from "./components/InputCopy";
import {
    PaperAirplaneIcon,
    EnvelopeIcon,
    BriefcaseIcon,
    StarIcon,
    PlusIcon,
    UserIcon,
    PuzzlePieceIcon,
    PencilIcon,
    DocumentCheckIcon,
} from "@heroicons/react/24/solid";
import Dialog from "./components/Dialog";
import SectionList from "./components/SectionList";
import BtnSkill from "./components/BtnSkill";
import { TSkill } from "./types";

import "./app.css";

const myGmail = "rdwerlynjose.16@gmail.com";

const skills: { [key: string]: TSkill } = {
    all: {
        Javascript: ["Typescript", "Jquery"],
        React: ["Antdesign", "Graphql", "I18next", "Reactrouter", "Redux", "Semanticuireact", "Socketdotio", "Vite", "Zustand", "Axios"],
        Tailwindcss: ["Daisyui"],
        Nodedotjs: ["Express", "JSONWebTokens", "Mongoose", "Nodemon", "Npm", "Yarn", "Socketdotio", "Webpack", "Cron"],
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

export default function App() {
    const { t } = useTranslation();
    const [selectedSkill, setSelectedSkill] = useState<string>("");
    const [selectedSection, setSelectedSection] = useState<string>("");

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
                    setSelectedSkill(skill);
                    setSelectedSection(section);
                }}
            />
        )
    }

    return (<>
        <Header/>

        <main>
        
            <section id="banner" className="hero min-h-96 bg-base-300">
                <div className="hero-content flex-col gap-2 lg:flex-row lg:gap-16">
                    <div className="max-w-md text-center bg-transparent backdrop-blur-sm rounded-lg">
                        <h1 className="text-5xl lg:text-6xl font-bold text-pretty">
                            {t('salute')}
                        </h1>
                        <p className="py-6 lg:text-xl text-balance">
                            {t('saluteDesc')}
                        </p>
                    </div>
                    <a className="btn btn-primary lg:btn-lg" href="#contact">
                        {t('saluteAction')}
                        <EnvelopeIcon className="w-5 h-5"/>
                    </a>
                </div>
            </section>

            <section id="about" className="land-section">
                <div className="wrapper-content">
                    <h1 className="title">
                        <UserIcon className="fill-sky-600"/>
                        {t('about')}
                    </h1>
                    
                    <p className="py-6">
                        {t('aboutDesc')}
                    </p>
                </div>
            </section>

            <section id="skills" className="land-section">
                <div className="wrapper-content">
                    <h1 className="title">
                        <PuzzlePieceIcon className="fill-amber-600"/>
                        {t('skills')}
                    </h1>
                    <bdo className="text-sm lg:text-base">
                        {t('skillsHint')}
                    </bdo>

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

            <section id="projects" className="land-section">
                <div className="wrapper-content">
                    <h1 className="title">
                        <BriefcaseIcon className="fill-blue-600"/>
                        {t('projects')}
                    </h1>

                    <h2 className="subtitle">
                        <StarIcon/>
                        {t('main')}
                    </h2>

                    <h2 className="subtitle">
                        <PlusIcon/>
                        {t('other')}
                    </h2>
                </div>
            </section>

            <section id="contact" className="land-section">
                <div className="wrapper-content">
                    <h1 className="title">
                        <EnvelopeIcon className="w-8 h-8 fill-green-600"/>
                        {t('contact')}
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

        <Dialog
            id="dialogSkills"
            title={`${t('relatedTo')} ${selectedSkill}:`}
            open={selectedSkill !== ""}
            onClose={() => setSelectedSkill("")}
        >
            {selectedSkill && selectedSection && (
                <div className="flex flex-wrap gap-2 mt-2">
                    {skills[selectedSection][selectedSkill].sort().map((subskill, i) =>
                        <BtnSkill iconName={subskill}/>
                    )}
                </div>
            )}
        </Dialog>
    </>)
}