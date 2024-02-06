import "./styles.css";

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Banner component. shows an abstract background with birds flying in circles
 */
export default function () {
    const birds = 1;
    return (
        <div className="Banner bg-gradient-to-b from-cyan-50 to-bg-primary absolute top-0 left-0 w-full h-2/3 -z-10" >
            <div className="Container flex items-center justify-center h-full">
                {Array(birds).fill(0).map((_, i) => <Bird key={i} />)}
            </div>
        </div>
    )
}

const TimingFunctions = [
    "linear",
    "ease"
]

function Bird() {

    return (
        <img 
            className="Bird" style={{ 
                "--easing": TimingFunctions[randomInt(0, TimingFunctions.length - 1)],
                "--duration": `${randomInt(5, 10)}s`,
                "--delay": `${randomInt(0, 5)}s`
            } as React.CSSProperties}
            src="https://cdn.pixabay.com/photo/2015/04/30/20/53/pigeon-747462_1280.jpg"
        >

        </img>
    )
}