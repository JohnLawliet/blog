import VisibilitySensor from "react-visibility-sensor";
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { Icon } from "./technology.styles";
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";
import Image from 'next/image'

const Technology = ({percentage, title, stack, image}) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const formatted = `${percentage}%`
    

    const handleClick = (e) => {
        console.log(e)
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <Icon onClick={() => handleClick()}>
                <Image 
                    src={image}
                    layout="fill"
                    objectFit="contain"
                />
            </Icon>
            <Icon onClick={() => handleClick()}>
                <CircularProgressbar
                value={percentage}
                text={formatted}
                background={true}
                styles={buildStyles({
                    rotation: 0.65,                
                    strokeLinecap: 'round',                
                    textSize: '16px',
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 2.5,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#000'
                })}
                />
            </Icon>
        </ReactCardFlip>

        
    )
}

export default Technology
