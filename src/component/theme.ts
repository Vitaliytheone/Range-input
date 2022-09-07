import styled from "styled-components";

const blue = "#2F46B0";
const grey = "#B9C1CD";

export const Input = styled.input`
    appearance: none;
    margin: auto;
    height: 7px;
    position: relative;
    cursor: pointer;
    border-radius: 34px;
    background: ${grey};

    &::-webkit-slider-thumb {
        appearance: none;
        width: 24px;
        height: 24px;
        background: ${blue};
        border-radius: 50%;
        border: 4px solid #fff; 
        cursor: pointer;
    }

    &::-moz-range-thumb {
        appearance: none;
        width: 24px;
        height: 24px;
        background: ${blue};
        border-radius: 50%;
        border: 4px solid #fff; 
        cursor: pointer;
    }

`

export const Line = styled.div<{$widthBeforeTumb: number}>`
    position: absolute;
    width: ${({$widthBeforeTumb}) => `${$widthBeforeTumb}px`};
    height: 100%;
    background: ${blue};
    border-top-left-radius: 34px;
    border-bottom-left-radius: 34px;
`

export const Wrapper = styled.div<{$width: string}>`
    width: ${({$width}) => $width};
    display: flex;
    flex-direction: column;
    position: relative;

    ${Input} {
        width: ${({$width}) => $width};
    }
`


