import { Colors } from "../utils/theme"

interface ILoaderProps {
    /**
     * Additional class names
     */
    className?: string
    /**
     * Color of the spinner
     * @default primary
     */
    color?: keyof typeof Colors
    /**
     * Whether to show the spinner
     * @default true
     */
    loading?: boolean
}

/**
 * Loader component, shows a spinner
 */
export default function (props: ILoaderProps) {
    const {
        className = '',
        color = 'primary',
        loading = true
    } = props

    return (
        <span className={`loading-spinner ${loading && 'loading'} text-${Colors[color]} ${className}`}>

        </span>
    )
}