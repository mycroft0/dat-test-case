// App.tsx
import React from 'react';
import CarScheme from './../components/car/CarScheme';

interface AppProps {
    options: {
        initializedOptions: string[];
        onPositionChange: (positions: string[]) => void;
        onComplete: (positions: string[]) => void;
        onInit: () => void;
    };
}

const App: React.FC<AppProps> = ({ options }) => {
    return (
        <div className="app">
            <CarScheme options={options} />
        </div>
    );
};

export default App;