import React, {useEffect, useState} from 'react';
import PointButton from './PointButton';
import car from './png-transparent-top.png';
import '../../styles/plugin.css'

interface CarSchemeProps {
    options: {
        initializedOptions: string[];
        onPositionChange: (positions: string[]) => void;
        onComplete: (positions: string[]) => void;
        onInit: () => void;
    };
}


const CarScheme: React.FC<CarSchemeProps> = ({options}) => {

    const [activePoints, setActivePoints] = useState([])
    const [shouldDbToBackEnd, setShouldDbToBackEnd] = useState(false)

    const handlePointClick = (position: string) => {
        setActivePoints([...activePoints, position])
        activePoints.indexOf(position) >= 0 ? setActivePoints(activePoints.filter((item) => item !== position)) : setActivePoints([...activePoints, position])
        setShouldDbToBackEnd(true)
    };


    useEffect(() => {
        fetch(" https://myfailemtions.npkn.net/b944ff/")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setActivePoints(data)
            })
    }, [])

    useEffect(() => {
        if (shouldDbToBackEnd) {
            fetch('https://myfailemtions.npkn.net/b944ff/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(activePoints)

            })
                .then(response => {
                    return response.json()
                }
                )
                .then(data => {
                    console.log(data)
                })

        }
    }, [activePoints])


    console.log(activePoints)


    return (
        <div>
            <img src={car} alt={'car'}/>
            <PointButton x={100} y={0} isActive={activePoints.indexOf('A-1') >= 0}
                         onClick={() => handlePointClick('A-1')}/>
            <PointButton x={300} y={0} isActive={activePoints.indexOf('A-2') >= 0}
                         onClick={() => handlePointClick('A-2')}/>
            <PointButton x={600} y={0} isActive={activePoints.indexOf('A-3') >= 0}
                         onClick={() => handlePointClick('A-3')}/>
            <PointButton x={750} y={0} isActive={activePoints.indexOf('A-4') >= 0}
                         onClick={() => handlePointClick('A-4')}/>
            <PointButton x={20} y={150} isActive={activePoints.indexOf('B-1') >= 0}
                         onClick={() => handlePointClick('B-1')}/>
            <PointButton x={200} y={150} isActive={activePoints.indexOf('B-2') >= 0}
                         onClick={() => handlePointClick('B-2')}/>
            <PointButton x={500} y={150} isActive={activePoints.indexOf('B-3') >= 0}
                         onClick={() => handlePointClick('B-3')}/>
            <PointButton x={800} y={150} isActive={activePoints.indexOf('B-4') >= 0}
                         onClick={() => handlePointClick('B-4')}/>
            <PointButton x={850} y={150} isActive={activePoints.indexOf('B-5') >= 0}
                         onClick={() => handlePointClick('B-5')}/>
            <PointButton x={100} y={320} isActive={activePoints.indexOf('C-1') >= 0}
                         onClick={() => handlePointClick('C-1')}/>
            <PointButton x={300} y={320} isActive={activePoints.indexOf('C-2') >= 0}
                         onClick={() => handlePointClick('C-2')}/>
            <PointButton x={600} y={320} isActive={activePoints.indexOf('C-3') >= 0}
                         onClick={() => handlePointClick('C-3')}/>
            <PointButton x={750} y={320} isActive={activePoints.indexOf('C-4') >= 0}
                         onClick={() => handlePointClick('C-4')}/>
        </div>
    );
};

export default CarScheme;