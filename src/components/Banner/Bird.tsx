
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const birdColors = [
    "bg-cyan-400",
    "bg-success",
    "bg-warning"
]

export default function () {
    return (
        <div 
            className={`Bird ${birdColors[randomInt(0, birdColors.length - 1)]}`}
            style={{
                "--duration": `${randomInt(5, 10)}s`,
                "--y-offset": `${randomInt(0, 50)}%`,
                "--bird-size": `${randomInt(4, 10)}rem`
            } as React.CSSProperties}
        >

        </div>
    )
}