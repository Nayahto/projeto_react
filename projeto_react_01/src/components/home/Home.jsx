/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import './Home.css'



function Home() {
    const [anotacoes, setAnotacoes] = useState([
        {titulo: 'anotacoes', texto:'lorem ipsum', data: '23/12/22',id:4},
        {titulo: 'anotacoes', texto:'lorem ipsum', data: '23/12/22',id:5},
        {titulo: 'anotacoes', texto:'lorem ipsum', data: '23/12/22',id:6}, 
        {titulo: 'anotacoes', texto:'lorem ipsum', data: '23/12/22',id:7}, 
        {titulo: 'anotacoes', texto:'lorem ipsum', data: '23/12/22',id:8}, 
        {titulo: 'anotacoes', texto:'lorem ipsum', data: '23/12/22',id:9}, 
        {titulo: 'anotacoes', texto:'lorem ipsum', data: '23/12/22',id:10}, 
        {titulo: 'anotacoes', texto:'lorem ipsum', data: '23/12/22',id:1},
        {titulo: 'anotacoes', texto:'lorem ipsum', data: '23/12/22',id:2},
        {titulo: 'anotacoes', texto:'lorem ipsum', data: '23/12/22',id:3} 
    ])

    console.log(anotacoes)
    return (
        <>
        <h2 id="personalizarH2">pagina inicial</h2>
        <div className="home">
            <div className="anotacoes">
            { anotacoes.map((anotacao) => {
                return <div className="personalizarAnotacoes" key={anotacao.id}>
                    <h2>{anotacao.titulo}</h2>
                    <p>texto: {anotacao.texto}</p>
                    <p>data: {anotacao.data}</p>
                </div>;
            })}
            </div>
        </div>
        </>
        );
}

export default Home;