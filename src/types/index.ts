export type TSimpleIcon = {
    hex: string,
    path: string,
    title: string
}

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

export type TLink = {
    name: string;
    icon: string;
    url: string;
}

export type TProject = {
    id: string;
    title: string;
    desc: string;
    techs: string[];
    links: TLink[];
}

/**
 * A section data is the info of each section in the landing page.
 */
export type TSectionData = {
    /**
     * The key is used to create the id of the section.
     */
    key: string;
    /**
     * The label is used to create the label of the section.
     */
    label: string;
}

/**
 * A section is a group of data that is used to create a section in the landing page.
 * And it can be used with an 'a' tag to navigate to the section.
 * @example
 * <section id={Sections[section].key}>
 * <a href={`#${Sections[section].key}`}>{Sections[section].label}</a>
 */
export type TSections = {
    [key: string]: TSectionData;
}

export type TAppDataLoader = {
    data: [
        TCertificate[],
        TSkillData,
        TProject[]
    ]
}