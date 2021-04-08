import React, {useState, useEffect,componentDidMount} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const [load, setLoad] = useState([])

    const history = useHistory();

    const token = localStorage.getItem('token')
    const header = "Token " + token

    useEffect(() => {
        localStorage.clear()
    })

    async function LoadToken(){
        setLoad(true)
        try{
            const response = await api.get('/profile', {headers:{'Authorization': header,}})
            .then(response => {
                setIncidents(response.data);
            })

        }catch(err){
            alert('Tente Novamente')
            history.push('/login');

        }finally{
            setLoad(false)
        }
    }

    useEffect(() => {
        LoadToken()
    }, [])
        

    return(
    <div className="profile-container">

    <h1>Apis</h1>
        {load && (
            <div className="loader">
                <div className="c-loader"></div>
            </div>
        )}

        <ul>
            {!load && (
            <>
            {incidents.entries.map((item,index) => (
                <li key={index}>
                    <strong>API: {item.API}</strong>

                    <strong>AUTH: {item.Auth}</strong>

                    <strong>HTTPS: {item.HTTPS}</strong>

                    <strong>CORS: {item.Cors}</strong>

                    <strong>LINK:<a href={item.Link}> {item.Link}</a></strong>

                    <strong>CATEGORY: {item.Category}</strong>

                    <strong>DESCRIPTION: {item.Description}</strong>
                </li>
                ) )}
            </>
            )}
        </ul>
    </div>
    )
}