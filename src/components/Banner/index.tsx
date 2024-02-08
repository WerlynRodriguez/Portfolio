import Bird from "./Bird";
import "./styles.css";

/**
 * Banner component. shows an abstract background with birds flying in circles
 */
export default function () {
    const birds = 5;

    return (
        <div className="Banner bg-gradient-to-b from-cyan-50 to-bg-primary absolute top-0 left-0 w-full h-2/3 -z-10" >
            <div className="Container flex items-center justify-center h-full">
                {Array(birds).fill(0).map((_, i) => <Bird key={i} />)}
            </div>
        </div>
    )
}