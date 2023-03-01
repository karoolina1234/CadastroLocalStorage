import styled from "styled-components";

export const Content = styled.div`
    .titleForm{
        margin-top: 1rem;
        color:#090088;
        text-align: center;
        font-size: 1.5rem;
    }

    form{
        div{
            label{
                color: #090088;
            }
            input{
                border-color: #090088;
            }
            select{
                border-color: #090088;
            }
        }
        button{
                margin-top: 1rem;
                background-color: #090088;
                border: 1px solid #090088;
                float: right;
            }

            #addImage{
                display: block!important;
                width: 100%;
                padding: 0.5rem 0;
                border-radius: 0.5rem;

            }
            .previewImg{
                position: relative;
                max-width: 8rem;
                margin: 1rem auto;
                text-align: center;
            }
            .preview{
                min-width: 100%;
                max-width: 100%;
                object-fit: cover;
                border-radius: 0.5rem;
            }
            #remove{
                top: -1rem;
                right: -1rem;
                position: absolute;
                cursor: pointer;
                width: 1rem;
                height: 1rem;
                font-size: 0.7rem;
                font-weight: bold;
                background: red;
                border-radius: 1rem;
                color: #FFF;
            }
    }
`