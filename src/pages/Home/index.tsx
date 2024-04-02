import { useTranslation } from "react-i18next";
import { useState } from "react";
import Header from "../../components/Header";
import InputCopy from "../../components/InputCopy";
import {
    PaperAirplaneIcon,
    EnvelopeIcon,
    BriefcaseIcon,
    PlusIcon,
    UserIcon,
    PuzzlePieceIcon,
    AcademicCapIcon,
    DocumentIcon,
} from "@heroicons/react/24/solid";
import Dialog from "../../components/Dialog";
import SectionList from "../../components/SectionList";
import BtnSkill from "../../components/BtnSkill";
import { TAppDataLoader, TSections } from "../../types";
import ProjectCard from "../../components/ProjectCard";
import Certification from "../../components/Certification";

import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer";

import "./styles.css";

/**
 * @todo Fix reloading icons on every render
 * @todo Add "paper airplane" decoration (floating around the page)
 * @todo Repair CSS paper pattern
 */

const myGmail = "rdwerlynjose.16@gmail.com";

export function Component() {
    const data = useLoaderData() as TAppDataLoader;

    const [
        certificates, 
        skills,
        projects
    ] = data.data;

    const { t } = useTranslation('home');

    const [selected, setSelected] = useState<{ 
        skill: string, 
        section: string 
    }>({ 
        skill: "", 
        section: ""
    });

    const [selectedCert, setSelectedCert] = useState<number>(0);


    const landSections: TSections = Object.freeze({
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

    /**
     * Use this function to render a skill button
     */
    function SectionSkill(props: { skill: string, section: string }) {
        const { skill, section } = props;
        const skillData = skills[section][skill];

        return (
            <BtnSkill
                iconName={skill}
                badge={skillData.length || undefined}
                onClick={() => {
                    if (skillData.length === 0) return;

                    setSelected({ skill, section });
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

                    {Object.keys(skills).map((section, i) => 
                        <SectionList
                            key={`${section}-${i}`}
                            label={t(section)}
                            icon={<AcademicCapIcon/>}
                            data={Object.keys(skills[section]).sort()}
                            renderItem={(skill, i) => 
                                <SectionSkill skill={skill} section={section} key={i}/>
                            }
                        />
                    )}
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
                                <a className="btn xs:btn-sm lg:btn-md btn-primary" href="/projects">
                                    <PlusIcon className="w-5 h-5"/>
                                    Ver más
                                </a>
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
                        <Certification {...certificates[selectedCert]}/>
                    </div>

                    <div className="list-flex-wrap justify-center pt-4">
                        {certificates.map((cert, i) =>
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

        <Footer sections={landSections}/>

        <Dialog
            id="dialogSkills"
            title={`${t('relatedTo')} ${selected.skill}:`}
            open={selected.skill !== ""}
            onClose={() => setSelected({ skill: "", section: "" })}
        >
            {selected.skill && selected.section && (
                <div className="list-flex-wrap">
                    {skills[selected.section][selected.skill]
                        .sort()
                        .map((subskill, i) =>
                            <BtnSkill iconName={subskill} key={i}/>
                    )}
                </div>
            )}
        </Dialog>
    </>)
}