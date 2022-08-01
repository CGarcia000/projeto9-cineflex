import styled from "styled-components";
import { Link } from "react-router-dom";

export function RequestMade({
    scheduleObj
}) {
    return(
        <>
            <Title pageTitle={true}>Pedido feito com sucesso!</Title>
            
            <BlockDetail>
                <Title>Filme e sessão</Title>
                <div>
                    <div>{scheduleObj.movie.name}</div>
                    <div>{scheduleObj.session.date} {scheduleObj.session.time}</div>
                </div>
            </BlockDetail>

            <BlockDetail>
                <Title>Ingresso(s)</Title>
                <div>
                    {scheduleObj.seats.map(numSeat => <div key={numSeat}>Assento {numSeat}</div>)}
                </div>
            </BlockDetail>

            <BlockDetail>
                <Title>Comprador</Title>
                <div>
                    <div>Nome: {scheduleObj.buyer.name}</div>
                    <div>CPF: {scheduleObj.buyer.cpf}</div>
                </div>
            </BlockDetail>

            
            <ButtonHome>
                <Link to='/'>
                    <button>Voltar pra Home</button>
                </Link>
            </ButtonHome>
        
        </>
    );
}

const Title = styled.div`
    text-align: ${props => props.pageTitle ? 'center' : 'left' };
    font-size: 1.5rem;
    color: ${props => props.pageTitle ? '#247A6B' : 'black' };
    font-weight: ${props => props.pageTitle ? 700 : 500 };
    margin-top: 2rem;
`;

const BlockDetail = styled.div`
    padding: 0 3rem;
    margin-top: 3rem;
    font-size: 1.3rem;

    > div:nth-child(2) {
        margin-top: 1rem;
    }

    div {
        margin-top: 0.8rem;
        
    }
`;

const ButtonHome = styled.div`
    display: flex;
    justify-content: center;

    button {
        font-size: 1rem;
        cursor: pointer;
        text-align: center;
        margin: 2rem 0;
        width: 10rem;
        height: 3rem;
        color:white;
        background-color: #E8833A;
        border: none;
        border-radius: 2px;
        text-align: center;
    }
`;