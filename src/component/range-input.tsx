import React from "react";
import "./style.css";
import { Input, Wrapper, Line } from "./theme";

type TRangeInput = {
    min: number;
    max: number;
    width?: string;
    withTooltip?: boolean;
};

const RangeInput = ({ min, max, width = "200px", withTooltip = true }: TRangeInput) => {
    const [range, setRange] = React.useState(min);
    const [step, setStep] = React.useState(0);
    const ref = React.useRef<HTMLInputElement>(null);

    const getRange = (ev: any) => {
        setRange(ev.target.value);
    };

    React.useEffect(() => {
        const rangeLinePadding = 24;
        const calcStep = (ref.current!.offsetWidth - rangeLinePadding) / Number(ref.current!.max);
        setStep(calcStep);
    }, []);

    const widthBeforeTumb = range * step;

    return (
        <Wrapper $width={width}>
            <Input type="range" id="range" min={min} max={max} value={range} onChange={getRange} ref={ref} />
            <Line $widthBeforeTumb={widthBeforeTumb}></Line>
            {withTooltip && (
                <label
                    htmlFor="range"
                    style={{
                        transform: `translateX(${widthBeforeTumb}px)`,
                    }}
                >
                    <span>{range}</span>
                </label>
            )}
        </Wrapper>
    );
};

export default RangeInput;
