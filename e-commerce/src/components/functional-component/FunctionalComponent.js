import React from 'react'

const FunctionalComponent = ({hello, setName}) => {
    const showMessage = ()=> {
        alert(`Cual es la frase ?: ${hello}`);
    }
    const handleName = ()=> setName("Leo");
    
    return (
        <div>       
        
        <button onClick={showMessage} >Mostrar alerta</button>
        <button onClick={handleName} >Cambiar Nombre</button>

        </div>
    )
}

export default FunctionalComponent
