export type TSkill = {
    [key: string]: string[];
}

export type TSkillData = {
    [key: string]: TSkill;
}

export type TCertificate = {
    title: string;
    icon: string;
    from: string;
    date: string;
    link: string;
}

export type TProject = {
    title: string;
    desc: string;
    techs: string[];
    img: string;
}

export interface ISectionData {
    key: string;
    label: string;
}