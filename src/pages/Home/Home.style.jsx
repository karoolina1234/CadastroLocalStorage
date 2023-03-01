import styled from "styled-components";


export const Content = styled.div`
text-align: center;
.listItem{
    min-width: 20rem;
    max-width: 20rem;
    min-height: 30rem;
    max-height: 30rem;
    display: inline-block;
    margin: 1.2rem;
    text-align: center;
    background-color: rgb(30 54 136 / 13%);
    padding: 2.5rem;
    border-radius: 0.5rem;
    position: relative;
    text-align: center;
    img{
        max-width: 15rem;
        min-width: 15rem;
        min-height: 15rem;
        max-height: 15rem;
        object-fit: cover;
        border-radius: 0.5rem;
    }
    p{
        margin: 0.2rem;
        font-size: 0.9rem;
        font-weight: bold;

    }
    .paragraphData{
        margin-top: 1rem;
    }
    .removeObj{
        background: transparent;
        border:none;
        position: absolute;
        top: 0rem;
        right: 0rem;
        svg{
            width: 1rem;
            height: 1rem;
            fill: red;
            cursor: pointer;
        }
    }
    .editButton{
        background: transparent;
        border:1px solid  #090088;
        padding: 0.2rem 0.8rem;
        border-radius: 0.5rem;
        width: 100%;
        margin-top: 1rem;
        background: #090088;
        color:#FFF;
        svg{
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
            path{
                fill: #fff;
            }
        }
    }
}
.listaPAG{
    margin-top: 2rem;
        li{
            display: inline-block;
            width: 1.5rem;
            background: #090088;
            color: #fff;
            margin: 0.6rem;
            border-radius: 1rem;
        }
        li:hover{
            color: #090088;
            background-color: #0900884f;
        }
}
.filterList{
    margin-top: 2rem;
    margin-bottom: 2rem;

    label{
        color: #090088;
        font-weight: bold;
    }
}
`

export const Estado = styled.p`
    color: ${props => 
    (props.estado ==="excelente" ? `#32ad2b` : 
    props.estado === 'bom'? '#af9e0a':
    props.estado === 'ruim'&& 'red')};

`

export const NoData = styled.div`
    margin-top: 3rem;
    color: #090088;
    font-size: 1.6rem;
    font-weight: bold;
`