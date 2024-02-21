import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
interface IInputCopyProps {
    /**
     * The label for the input
     */
    label: string;
    /**
     * The value to be copied
     * @default label
     */
    value?: string;
    className?: string;
}

/**
 * InputCopy component, for allowing user to copy the value of the input
 */
export default function (props: IInputCopyProps) {
    const {
        label = "",
        value = label,
        className = ""
    } = props;

    const onClick = () => {
        navigator.clipboard.writeText(value);
    }

    return (
        <div className="lg:tooltip tooltip-bottom" data-tip="copy">
            <button className={`btn btn-wide btn-neutral ${className}`} onClick={onClick}>
                {label}
                <DocumentDuplicateIcon className="w-5 h-5"/>
            </button>
        </div>
    )
}