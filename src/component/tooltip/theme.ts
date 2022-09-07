import styled from "styled-components";
import { black } from "../theme";

export const TooltipWrap = styled.div<{$transformWidth: number}>`
    background: ${black};
    border-radius: 8px;
    padding: 10px 12px;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: inline-block;
    position: absolute;
    top: 24px;
    width: 100px;
    text-align: center;
    transform:  ${({$transformWidth}) =>  `translateX(${$transformWidth - 50}px)`};
    z-index: 999;

    &:before {
        content: "";
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        top: -8px;
        left: 50%;
        margin-left: -8px;
        width: 0;
        height: 0;
        border-bottom: 8px solid ${black};
        position: absolute;
    }
`