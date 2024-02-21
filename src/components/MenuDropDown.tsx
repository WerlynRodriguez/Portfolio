import { ReactNode } from 'react';
import { SwatchIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

type TItem = {
    label: string;
    onClick: () => void;
}

interface IMenuDropDownProps {
    /** 
     * The label of the button to show dropdown 
     * */
    label: ReactNode;
    /** 
     * The tab index of the dropdown for keyboard navigation 
     * */
    tabIndex?: number;
    /**
     * Where to align the dropdown 
     * @default null 
     * */
    align?: 'end' | null;
    /**
     * The position of the dropdown
     * @default 'bottom'
     * */
    position?: 'bottom' | 'top' | 'left' | 'right';
    /**
     * The options to show in the dropdown 
     * */
    options: TItem[];
    /**
     * The selected item
     */
    selected?: string;
}

export default function (props: IMenuDropDownProps) {
    const { 
        label, 
        options = [], 
        tabIndex = 0,
        align = null,
        position = 'bottom',
        selected = null
    } = props;

    // This works and css focus is working
    return (
        <div className={`dropdown ${align && `dropdown-end`} dropdown-${position}`}>
            <div tabIndex={tabIndex} role="button" className="btn btn-ghost">
                <SwatchIcon className="w-5 h-5 ml-1" />
                {label}
            </div>
            <ul tabIndex={tabIndex} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                {options.map((item, index) => (
                    <li key={index} onClick={item.onClick}>
                        <a >
                            {item.label}
                            {selected === item.label && <CheckCircleIcon className="w-5 h-5 ml-1" />}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}