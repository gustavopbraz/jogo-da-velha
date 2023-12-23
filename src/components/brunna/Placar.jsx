/* eslint-disable react/prop-types */
import "./Placar.css"

function Placar(props) {

    return (
        <>
                <div className="placar">
                    {/* pontuação do time mudará conforme a mudança do input */}
                    <div className="time">
                        <p>Time {props.time}</p>
                        <p>{props.pontuacao}</p>
                    </div>
                </div>
        </>
    )
  }
  
  export default Placar;