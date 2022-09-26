import forca0 from "./img/forca0.png"
import forca1 from "./img/forca1.png"
import forca2 from "./img/forca2.png"
import forca3 from "./img/forca3.png"
import forca4 from "./img/forca4.png"
import forca5 from "./img/forca5.png"
import forca6 from "./img/forca6.png"
import styled from "styled-components"
import palavras from "./palavras"
import { useState } from "react"

const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]


export default function App() {

    let contadorForca = 0
    let letraSelecionada = ''
    let checarPalavra = ''

    const [palavra, setPalavra] = useState({
        palavra: '',
        estado: 'início'
    });
    console.log(palavra);

    const [palavraTela, setPalavraTela] = useState('')
    const [letrasSelecionadas, setLetrasSelecionadas] = useState([])

    function selecionarPalavra() {
        checarPalavra = ''
        setPalavraTela('')
        setLetrasSelecionadas([])
        const novaPalavra = palavras[Math.floor(Math.random()*palavras.length)]
        console.log(novaPalavra)
        setPalavra({...palavra,
            palavra: novaPalavra.split(''),
            estado: 'jogando'
        })
        contadorForca = 0
        letraSelecionada = ''

        novaPalavra.split('').forEach(adivinharPalavra)
    }

    function adivinharPalavra(letra) {
        checarPalavra = checarPalavra + (letrasSelecionadas.includes(letra) ? letra : '_')
        setPalavraTela(...palavraTela, checarPalavra)
        console.log(palavraTela)
        console.log(checarPalavra)
    }

    function selecionarLetra(props) {
        letraSelecionada = props.target.textContent
        letrasSelecionadas.push(letraSelecionada)
        setLetrasSelecionadas(letrasSelecionadas)
        palavra.palavra.forEach(adivinharPalavra)
        setPalavraTela(checarPalavra)

        const letraCerta = palavra.palavra.includes(letraSelecionada)
        console.log(letraCerta)
        console.log(letrasSelecionadas)
    }

    function Jogo() {
        return (
            <TelaForca>
                <Forca>
                    <img src={forca[contadorForca]} alt="forca"/>
                </Forca>
                <Palavra>
                    <EscolherPalavra onClick={selecionarPalavra}>
                        Escolher Palavra
                    </EscolherPalavra>
                    <PalavraRenderizada>
                        {palavraTela}
                    </PalavraRenderizada>
                </Palavra>
            </TelaForca>
        )
    }

    function Letra(props) {
        return (
            <Tecla onClick={selecionarLetra}>{props}</Tecla>
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

const Palavra = styled.div`
`

const PalavraRenderizada = styled.div`
    font-size: 24px;
    letter-spacing: 5px;
    position: absolute;
    bottom: 0;
    right: 30px;
`