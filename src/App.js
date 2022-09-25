import forca0 from "./img/forca0.png"
import forca1 from "./img/forca1.png"
import forca2 from "./img/forca2.png"
import forca3 from "./img/forca3.png"
import forca4 from "./img/forca4.png"
import forca5 from "./img/forca5.png"
import forca6 from "./img/forca6.png"
import styled from "styled-components"
import palavras from "./palavras"

const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]


export default function App() {

    const contadorForca = 0;
    
    function selecionarPalavra() {
      const palavra = palavras.[Math.floor(Math.random() * palavras.length)];
      alert(palavra);
    }

    function Jogo() {
        return (
            <TelaForca>
                <Forca>
                    <img src={forca[contadorForca]} alt="forca"/>
                </Forca>
                <EscolherPalavra onClick={selecionarPalavra}>
                    Escolher Palavra
                </EscolherPalavra>
            </TelaForca>
        )
    }

    function Letra(props) {
        return (
            <Tecla>{props}</Tecla>
        )
    }

    function Letras() {

        const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

        return (
            <Teclado>
                {alfabeto.map(Letra)}
            </Teclado>
        )
    }

    function Chute() {
        return (
            <JanelaChute>
                <p>Já sei a palavra!</p>
                <input></input>
                <button>Chutar</button>
            </JanelaChute>
        )
    }

    return (
        <>
            <Jogo/>
            <Letras/>
            <Chute/>
        </>
    )
}

const TelaForca = styled.div`
    width: 650px;
    position: relative;
    margin: 0 auto;
    margin-top: 30px;
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

const Teclado = styled.div`
    width: 650px;
    height: 100%;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

const Tecla = styled.button`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-bottom: 10px;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
`

const JanelaChute = styled.div`
    width: 650px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`