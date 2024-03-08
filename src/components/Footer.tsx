import { useTranslation } from "react-i18next";
import { getIcon } from "../iconUtils";
import { TSections } from "../types";
import SimpleIcon from "./SimpleIcon";

interface IFooterProps {
    sections: TSections;
}

/**
 * Generic footer used in overviews pages.
 */
export default function (props: IFooterProps) {
    const { t } = useTranslation('footer');
    const { sections } = props;

    const socials = [
        {
            icon: "Github",
            link: "https://github.com/WerlynRodriguez"
        },
        {
            icon: "Linkedin",
            link: "https://www.linkedin.com/in/werlyn-rodriguez-760007183/"
        }
    ]

    const Social = ({
        icon,
        link
    }: {
        icon: string;
        link: string;
    }) => {
        const iconInfo = getIcon(icon);

        return (
            <a className="btn btn-neutral" href={link} target="_blank">
                <SimpleIcon className="w-6 h-6" path={iconInfo.path}/>
                {icon}
            </a>
        )
    }

    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content">
            {sections &&
            <nav className="grid grid-flow-col gap-4">
                {Object.keys(sections).map(nameSec =>
                    <a className="link link-hover" href={`#${sections[nameSec].key}`} key={sections[nameSec].key}>
                        {sections[nameSec].label}
                    </a>
                )}
            </nav>}

            <nav>
                <div className="grid grid-flow-col gap-4">
                    {socials.map((social, i) =>
                        <Social
                            key={i}
                            {...social}
                        />
                    )}
                </div>
            </nav>

            <aside>
                <p>
                    2024 - {t('designedBy')} <a className="link" href="https://github.com/WerlynRodriguez" target="_blank">Werlyn</a> ♥
                    <br/>
                    <a className="link" href="https://github.com/WerlynRodriguez/Portfolio" target="_blank"> 
                        {t('pageCode')} 
                    </a>
                </p>
            </aside>
        </footer>
    )
}