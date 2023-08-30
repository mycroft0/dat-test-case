import { createRoot } from "solid-js";
window.MY_APP = {
    init: (options) => {
        const { selector } = options;
        if (selector) {
            const renderElement = document.querySelector(selector);
            if (renderElement) {
                // Загрузка кода приложения из файла app.js
                import('./components/App').then((module) => {
                    const App = module.default;
                    createRoot(renderElement).render(
                        App(options)
                    );
                });
            }
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    window.MY_APP &&
    window.MY_APP.init({
        selector: "#root",
        options: {
            initializedOptions: [A, B, C, D], // массив активных позиций
            onPositionChange(positions) {
            },
            onComplete(positions) {}, // вызывается при подтверждении событий
            onInit() {} // Вызывается на инициализацию плагина
        }
    });
});