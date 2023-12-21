import "./Placar.css"
import React, {useState} from "react";

function Placar() {

    const [placarTimeX, setPlacarTimeX] = useState(0);
    const [placarTimeO, setPlacarTimeO] = useState(0);

    /* quando apertar o botão reiniciar, essa função permitirá que a função seja reinicializada */
    function reiniciarPlacar(props) {
        setPlacarTimeO(0);
        setPlacarTimeX(0);
    }

    return (
        <>
            <div className="placarEReiniciar">
                <div className="placar">
                    {/* pontuação do time O mudará conforme a mudança do input */}
                    <div className="time">
                        <p>Time O</p>
                        <p>{placarTimeO}</p>
                        <input
                        type="number"
                        onChange={(e) => setPlacarTimeO(e.target.value)}

                        />
                    </div>
                    {/* pontuação do time O mudará conforme a mudança do input */}
                    <div className="time">
                        <p>Time X</p>
                        <p>{placarTimeX}</p>
                        <input
                        type="number"
                        onChange={(e) => setPlacarTimeX(e.target.value)}
                        />
                    </div>
                </div>
                {/* a div meuBotaoReiniciar existe só para que eu possa posicionar o botão botaoReiniciar no centro */}
                <div className="meuBotaoReiniciar">
                    <button className="botaoReiniciar" onClick={(e) => reiniciarPlacar(e)}>Reiniciar</button>
                </div>
            </div>
        </>
    )
  }
  
  export default Placar