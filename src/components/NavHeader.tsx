import { BeakerIcon } from '@heroicons/react/24/solid'

interface INavHeaderProps {
    items: string[];
}

export default function NavHeader(props: INavHeaderProps) {
    return (
        <header className="flex justify-center items-center w-full sticky top-0 p-2 z-10">
            <nav className="join shadow-md backdrop-blur-sm">
                {props.items.map((item, index) => (
                    <NavItem key={index} label={item} />
                ))}
            </nav>
        </header>
    );
}

interface INavItemProps {
    label: string;
}

function NavItem(props: INavItemProps) {
    const { label } = props;

    return (
        // When click, go to #label
        <a
            href={`#${label}`}
            className="join-item btn btn-md"
        >
            {label}
        </a>
    );
}