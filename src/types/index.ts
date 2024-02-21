export type TSkill = {
    [key: string]: string[];
}

export interface IBtnSkillProps {
    iconName: string;
    badge?: number;
    onClick?: () => void;
}