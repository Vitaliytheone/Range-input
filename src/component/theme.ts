import styled from "styled-components";

export const blue = "#2F46B0";
export const grey = "#B9C1CD";
export const black = '#070728';

export const Input = styled.input`
    width: 100%;
    appearance: none;
    margin: auto;
    height: 7px;
    position: relative;
    cursor: pointer;
    background: transparent;
    z-index: 3;

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

export const Line = styled.div<{$widthBeforeTumb?: number; $isActive?: boolean}>`
    position: absolute;
    width: ${({$widthBeforeTumb, $isActive}) => $isActive ? `${$widthBeforeTumb}px` : '100%'};
    height: 100%;
    background: ${({$isActive}) => $isActive ? blue : grey};
    border-radius:  ${({$isActive}) => $isActive ? '34px 0 0 34px' : '34px'};
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
`

export const Wrapper = styled.div<{$width: string}>`
    width: ${({$width}) => $width};

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

