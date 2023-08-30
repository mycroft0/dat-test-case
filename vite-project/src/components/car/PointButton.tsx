import React from 'react';

interface PointButtonProps {
    x: number;
    y: number;
    isActive: boolean;
    onClick: () => void;
}

const PointButton: React.FC<PointButtonProps> = ({ x, y, isActive, onClick }) => {
    const buttonStyle = {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        height: '30px',
        width: '30px',
        borderRadius: '50%',
        backgroundColor: isActive ? 'orange' : 'gray',
    };



    return <button className="point-button" style={buttonStyle}  onClick={onClick}></button>;
};

export default PointButton;