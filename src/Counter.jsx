import React, { useState } from 'react';

function Counter({ initialVal, incrementAmount }) {
    const [counter, setCounter] = useState(initialVal);

    const handleIncrement = () => {
        setCounter((prevCounter) => prevCounter + incrementAmount);
    };

    return (
        <div>
            <h2>Counter Value: {counter}</h2>
            <button onClick={handleIncrement}>Increment Value</button>
        </div>
    );
}

export default Counter;

// Respuesta a la pregunta:

// El parámetro para la función setter debe ser una función, como en el código de este componente:

// setCounter((prevCounter) => prevCounter + incrementAmount);

// Esto garantiza que el estado se actualice basándonos en su valor más reciente. La función pasada como argumento a setCounter recibe el valor actual del estado como parámetro (prevCounter en este caso) y devuelve el nuevo valor. Esto es crucial cuando trabajas con el estado en situaciones en las que el valor del estado depende del valor actual del estado.

// Al hacerlo de esta manera, nos aseguramos de que las actualizaciones del estado sean seguras y reflejen el valor más reciente, evitando posibles problemas de concurrencia y asegurando un comportamiento más predecible en tu aplicación.






