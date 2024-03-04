export type TSkill = {
    [key: string]: string[];
}

export type TCertificate = {
    title: string;
    icon: string;
    from: string;
    date: string;
    link: string;
}

export interface ISectionData {
    key: string;
    label: string;
}