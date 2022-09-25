import forca0 from "./img/forca0.png"
import forca1 from "./img/forca1.png"
import forca2 from "./img/forca2.png"
import forca3 from "./img/forca3.png"
import forca4 from "./img/forca4.png"
import forca5 from "./img/forca5.png"
import forca6 from "./img/forca6.png"
import styled from "styled-components"

const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

export default function App() {

    const contadorForca = 0;

    function Jogo() {
        return (
            <TelaForca>
                <Forca>
                    <img src={forca[contadorForca]} alt="forca"/>
                </Forca>
                <EscolherPalavra>
                    Escolher Palavra
                </EscolherPalavra>
            </TelaForca>
        )
    }

    return (
        <>
        <Jogo/>
        {/* <Letras/>
            <Chute/> */}
        </>
    )
}

const TelaForca = styled.div`
    width: 650px;
    position: relative;
    margin: 0 auto;
    display: flex;
`

const Forca = styled.div`
    img {
        width: 400px;
    }
`;

const EscolherPalavra = styled.button`
    width: 150px;
    height: 50px;
    position: absolute;
    top: 30px;
    right: 0px;
    color: #ffffff;
    background-color: #27ae60;
    border: 0px;
    border-radius: 10px;
`;