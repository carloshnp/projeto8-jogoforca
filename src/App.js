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



function App() {

    const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [contadorForca, setContadorForca] = useState(0)
    const [chute, setChute] = useState('')
    const [palavraTela, setPalavraTela] = useState('')
    const [letrasSelecionadas, setLetrasSelecionadas] = useState([])
    const [disabled, setDisabled] = useState(true)
    const [palavra, setPalavra] = useState({
        palavra: '',
        estado: 'padrão',
        cor: 'preto'
    });

    let letraSelecionada = ''
    let checarPalavra = ''

    function selecionarPalavra() {
        setDisabled(false)
        checarPalavra = ''
        const novaPalavra = palavras[Math.floor(Math.random()*palavras.length)]
        setPalavra({...palavra,
            palavra: novaPalavra.split(''),
            palavraOriginal: novaPalavra,
            estado: 'jogando'
        })

        novaPalavra.split('').forEach(adivinharPalavra)
    }

    function adivinharPalavra(letra) {
        checarPalavra = checarPalavra + (letrasSelecionadas.includes(letra) ? letra : '_')
        setPalavraTela(...palavraTela, checarPalavra)
    }

    function selecionarLetra(props) {

        letraSelecionada = props.target.textContent
        letrasSelecionadas.push(letraSelecionada)
        setLetrasSelecionadas(letrasSelecionadas)
        const palavraNormalizada = palavra.palavraOriginal.normalize('NFD').replace(/[\u0300-\u036f]/g,"").split('')
        palavraNormalizada.forEach((letra, index) => {
            checarPalavra = checarPalavra + (letrasSelecionadas.includes(letra) ? palavra.palavra[index] : '_')
            setPalavraTela(...palavraTela, checarPalavra)
        })

        const letraCerta = palavraNormalizada.includes(letraSelecionada)
        if (!letraCerta) {
            setContadorForca(contadorForca+1)
        }

        setPalavraTela(checarPalavra)

        jogoFinalizado()
    }

    function chutarPalavra() {
        const chuteNormalizado = chute.normalize('NFD').replace(/[\u0300-\u036f]/g,"")
        const palavraNormalizada = palavra.palavraOriginal.normalize('NFD').replace(/[\u0300-\u036f]/g,"")
        if (chuteNormalizado === palavraNormalizada) {
            setPalavra({...palavra, estado: 'initial', cor: 'verde'})
            setPalavraTela(palavra.palavraOriginal)
        }
        else {
            setPalavra({...palavra, estado: 'initial', cor: 'vermelho'})
            setPalavraTela(palavra.palavraOriginal)
            setContadorForca(forca.length-1)
        }
        setDisabled(true)
    }

    function jogoFinalizado() {
        if (contadorForca === (forca.length-2)) {
            setPalavra({...palavra, estado: 'initial', cor: 'vermelho'})
            setPalavraTela(palavra.palavraOriginal)
            setDisabled(true)
        }
        if (!checarPalavra.includes('_')) {
            setPalavra({...palavra, estado: 'initial', cor: 'verde'})
            setPalavraTela(palavra.palavraOriginal)
            setDisabled(true)
        }
    }

    function Letra(props) {
        return (
            <Tecla onClick={selecionarLetra} disabled={disabled || letrasSelecionadas.includes(props)}>{props}</Tecla>
        )
    }

    return (
        <>
            <TelaForca>
                <Forca>
                    <img src={forca[contadorForca]} alt="forca"/>
                </Forca>
                <Palavra>
                    <EscolherPalavra onClick={selecionarPalavra}>
                        Escolher Palavra
                    </EscolherPalavra>
                    <PalavraRenderizada cor={palavra.cor}>
                        {palavraTela}
                    </PalavraRenderizada>
                </Palavra>
            </TelaForca>

            <Teclado>
                {alfabeto.map(Letra)}
            </Teclado>

            <JanelaChute>
                <p>Já sei a palavra!</p>
                <input onChange={event => setChute(event.target.value)} placeholder="Faça um chute!" value={chute} disabled={disabled}></input>
                <button onClick={chutarPalavra} disabled={disabled}>Chutar</button>
            </JanelaChute>
        </>
    )
}

export default App

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
    background-color: ${props => props.disabled ? '#9faab5;' : '#e1ecf4;'};
    color: ${props => props.disabled ? '#79818a;' : '#3979a5;'};
    border: 1px solid #c9dbe9;
    border-radius: 5px;
`

const JanelaChute = styled.div`
    width: 650px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    input {
        width: 400px;
        height: 30px;
        border: 1px solid #cccccc;
        border-radius: 5px;
    }

    button {
        width: 80px;
        height: 35px;
        font-size: 16px;
        color: #3979a5;
        background-color: #e1ecf4;
        border: 1px solid #c9dbe9;
        border-radius: 5px;
    }
`

const Palavra = styled.div`
`

const PalavraRenderizada = styled.div`
    font-size: 24px;
    letter-spacing: 5px;
    color: ${props => {
        if (props.cor === 'verde') {
            return '#27ae60;'}
        else if (props.cor === 'vermelho') {
            return '#ff0e05;'}
        else {
            return 'initial;'};
    }};
    position: absolute;
    bottom: 0;
    right: 30px;
`