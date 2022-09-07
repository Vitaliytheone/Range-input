import styled from "styled-components";
import { grey } from "../theme";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
`

export const ValueBlock = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${grey};
`