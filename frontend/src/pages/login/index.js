import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api'
import './styles.css';

import linux from '../../assets/4linux.png';

export default function Logon(){
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    const history = useHistory();

    useEffect(() => {
        localStorage.clear()
    })

    async function handleLogin(e){
        e.preventDefault();

        try{
            
            const response = await api.post('/login', {username,password});
            
            localStorage.setItem('token', response.data.token);

            history.push('/');


        }catch(err){
            console.log(err)
            alert('Falha no Login, tente novamente')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
            <img src = {linux} alt="Be The Hero"/>
            <form onSubmit={handleLogin}>
                <h1>Faça seu login</h1>

                <input value = {username} onChange={e => setUsername(e.target.value)} placeholder="Login"/>
                <input type="password"value = {password} onChange={e => setPassword(e.target.value)} placeholder="Senha"/>
                <button className="button" type="submit">Entrar</button>

            
            </form>
            </section>
        </div>

        
    
    );
}