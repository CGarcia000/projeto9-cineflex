import styled from "styled-components";

export function RequestMade() {
    return(
        <>
            <Title pageTitle={true}>Pedido feito com sucesso!</Title>
            
            <BlockDetail>
                <Title>Filme e sessão</Title>
                <div>
                    teste
                </div>
            </BlockDetail>

            <BlockDetail>
                <Title>Ingresso(s)</Title>
                <div>

                </div>
            </BlockDetail>

            <BlockDetail>
                <Title>Comprador</Title>
                <div>
                    <div>Nome: </div>
                    <div>CPF: </div>
                </div>
            </BlockDetail>

            
            <ButtonHome>
                <button>Voltar pra Home</button>
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
    font-size: 1.2rem;

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