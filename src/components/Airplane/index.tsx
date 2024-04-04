import { useEffect, useRef } from 'react';
import './styles.css';

interface IPropsAirplane {
    width?: number;
    height?: number;
    /**
     * If true, the airplane will not have the animation
     */
    noAI?: boolean;
}

export default function (props: IPropsAirplane) {
    const {
        width = 100,
        height = width,
        noAI = false
    } = props;

    const svgRef = useRef<SVGSVGElement>(null);

    const randomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    useEffect(() => {
        if (noAI) {
            svgRef.current?.classList.add('noAI');
            return;
        }

        async function SetAirplaine(): Promise<void> {

            const spawnIn = randomInt(5, 12); // 5 to 12 seconds
            const duration = randomInt(7, 13); // 7 to 13 seconds
            console.log('Airplane will spawn in', spawnIn, 's');

            // Get the Y position of the user screen to spawn the airplane in a random position
            // (between the top of the screen and the bottom of the user screen)
            const userScreenTop = window.scrollY;
            const userScreenBottom = userScreenTop + window.innerHeight;
            const airplaneY = randomInt(userScreenTop, userScreenBottom - height);

            // Set the airplane position
            svgRef.current?.style.setProperty('--y', airplaneY + 'px');
            console.log('Airplane will spawn at', airplaneY, 'px');

            setTimeout(() => {
                console.log('Airplane animation started');
                svgRef.current?.classList.add('animate');

                // Add the --duration property to the css
                svgRef.current?.style.setProperty('--duration', duration + 's');

                // Remove the animation class after the duration
                setTimeout(() => {
                    console.log('Airplane animation ended');
                    svgRef.current?.classList.remove('animate');

                    // Restart the airplane
                    SetAirplaine();
                }, duration * 1000);
            }, spawnIn * 1000);
        }

        SetAirplaine();

    }, []);

    return (
        <svg
            className={'airplane_deco'}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            version="1.1"
            viewBox="0 0 280.115 280.115"
            xmlSpace="preserve"
            ref={svgRef}
        >
            <path
                fill="#B7BBBD"
                d="M139.979 205.146l-38.136-16.95-23.295 52.426 61.431-35.476z"
            ></path>
            <path
                fill="#EBEBEB"
                d="M280.027 13.17L0 151.784l78.915 34.12-.026 53.31 28.493-38.39 101.064 66.121L280.027 13.17z"
            ></path>
            <path
                fill="#D1D5D7"
                d="M280.115 13.17L108.651 203.807 78.845 240.64l-.193-51.989L280.115 13.17z"
            ></path>
        </svg>
    );
}