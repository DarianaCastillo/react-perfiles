import { useEffect, useState } from "react";

export const Promesas = () => {
    const URL_RANDOM_USERS = 'https://randomuser.me/api/?results=20';

    const [usuarios, setUsuarios] = useState([]);

    const cargar_usuarios = async () => {
        const respuesta = await fetch(URL_RANDOM_USERS);
        const {results} = await respuesta.json();
        setUsuarios(results);
       // console.log(usuarios);
    };

    useEffect(() => {
        cargar_usuarios();
    }, []);

    return(
        <>
        <h5>Promesas</h5>
        <ul>
            {usuarios.map(({ login, name, picture}) =>(
            <li key={login.uuid}>
                <img src={picture.medium} 
                alt={`${name.first} ${name.last}`} 
                />
                <div className='nombre'>
                    {name.first} {name.last}
                </div>
                </li>    
            ))}
        </ul>
        </>
    );
};

