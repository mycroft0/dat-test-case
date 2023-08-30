// index.tsx (или index.js, в зависимости от расширения)
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import App from '../src/components/App'; // Импорт основного компонента вашего приложения

// Режим разработки
if (import.meta.env.MODE === 'development') {
    const renderElement = document.getElementById('root');
    createRoot(renderElement as HTMLElement).render(
        <App
            options={{
                // ...someOptionsOnlyForDev
            }}
        />
    );
} else {
    // Режим продакшна
    window.DAMAGE_SELECTOR_API = {
        init: (options) => {
            const { selector } = options;
            if (selector) {
                const renderElement = document.querySelector(selector);
                if (renderElement) {
                    createRoot(renderElement as HTMLElement).render(
                        <ErrorBoundary>
                            <App options={options} />
                        </ErrorBoundary>
                    );
                }
            }
        }
    };
}