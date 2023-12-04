Ejercicio 11. Respuesta a la pregunta del Ejercicio 11:

Respuesta a la pregunta (should the parameter be a function or an immediate value? Why?):

El parámetro para la función setter debe ser una función, como en el código de este componente:

setCounter((prevCounter) => prevCounter + incrementAmount);

Esto garantiza que el estado se actualice basándonos en su valor más reciente. La función pasada como argumento a setCounter recibe el valor actual del estado como parámetro (prevCounter en este caso) y devuelve el nuevo valor. Esto es crucial cuando trabajas con el estado en situaciones en las que el valor del estado depende del valor actual del estado.

Al hacerlo de esta manera, nos aseguramos de que las actualizaciones del estado sean seguras y reflejen el valor más reciente, evitando posibles problemas de concurrencia y asegurando un comportamiento más predecible en tu aplicación.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
