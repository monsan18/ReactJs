import styled from "styled-components";

export const ContentList = styled.div`
    width: 100%;
    margin-left: 10px;


    h3 {
        font-size: 20px;
        font-weight: bold;
        color: gray;
        margin-left: 14px;
    }

    .boxWrap {
        width: 80%;
        display: flex;
        .img {
            width: 50%;
            height: 130px;
            background-color: gray;
        }

        .username {
            width: 30%;
            font-size: 20px;
            text-align: center;
            flex-flow: column wrap;
            color: gray
        }


    }

    .desc {
        width: 80%;
        color : blue;
    }
`