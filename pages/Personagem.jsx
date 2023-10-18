import { useParams } from "react-router-dom"
import './Personagem.css';

import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Personagem() {

    const [requisicao, setRequisicao] = useState();

    const { idDoPersonagem } = useParams();

    const buscarPersonagem = async () => {
        const resultado = await axios.get(`https://rickandmortyapi.com/api/character/${idDoPersonagem}`)
        setRequisicao(resultado.data);
        console.log (requisicao)
    }

    buscarPersonagem()

    return (
        <div className='details-card-container'>

            <div className='title-card'>
                <a>{idDoPersonagem}</a>
                <img
                    src={requisicao?.image}
                    alt={`Imagem de ${idDoPersonagem}`}
                />
            </div>
            <div className='infos-card'>
                <div className='infos-align'>
                    <div className='infos-title'>
                        <a>Origem</a>
                    </div>
                    <div className='infos-value'>
                        {requisicao?.origin.name}
                    </div>
                </div>
                <div className='infos-align'>
                    <div className='infos-title'>
                        <a>Tipo</a>
                    </div>
                    <div className='infos-value'>
                        
                    <a>{requisicao?.status}</a>
                       
                    </div>
                </div>

                <div className='infos-align'>
                    <div className='infos-title'>
                        <a> gênero</a>
                    </div>
                    <div className='infos-value'>
                        
                    <a>{requisicao?.gender}</a>
                       
                    </div>
                </div>
                
                <div className='infos-align'>
                    <div className='infos-title'>
                        <a> espécie</a>
                    </div>
                    <div className='infos-value'>
                        
                    <a>{requisicao?.species}</a>
                       
                    </div>
                </div>

               
            </div>
        </div>
    )
}

