import { useState, useEffect } from 'react'
import './Cat.css'
import cat from '../cat.png'

export default function Cat() {
    const [count, setCount] = useState(0)

    const rotate = {
        transform: `rotate(${count * 10}deg)`
    }

    const color = {
        color: `rgb(${255}, ${255 - (count/100 * 255)}, ${255 - (count/100 * 255)})`
    }

    useEffect(() => {
        if(count === 100) {
            setTimeout(() => window.open("https://youtu.be/j1Oegd_pLUk"), 50);
            setTimeout(() => setCount(0), 100);
        }
    }, [count]) 

    return (
        <div className="catspin">
            <div style={color}>
                {count}
            </div>
            <img src={cat}
             alt="meowmeow"
             style={rotate}
             onClick={() => {
                setCount(count + 1);
             }}/>
        </div>
    )
}