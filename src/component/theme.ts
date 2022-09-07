import styled from "styled-components";

export const blue = "#2F46B0";
export const grey = "#B9C1CD";
export const black = '#070728';

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

    &::-ms-fill-lower {
        background: ${blue};
    }

    &::-ms-thumb {
        width: 24px;
        height: 24px;
        background: ${blue};
        border-radius: 50%;
        border: 4px solid #fff; 
        cursor: pointer;
        box-sizing: border-box;
    }

    &::-ms-ticks-after {
        display: none;
    }

    &::-ms-ticks-before {
        display: none;
    }

    &::-ms-track {
        background: ${grey};
        color: transparent;
        height: 7px;
        border: none;
    }

    &::-ms-tooltip {
        display: none;
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

export const InputWrapper = styled.div<{$width: string}>`
    width: ${({$width}) => $width};
    display: flex;
    flex-direction: column;
    position: relative;

    ${Input} {
        width: ${({$width}) => $width};
    }
`


