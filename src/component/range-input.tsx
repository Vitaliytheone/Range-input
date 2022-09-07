import { useEffect, useState, useRef } from "react";
import { BottomInfo } from "./bottom-info";
import { Label } from "./label";
import "./style.css";
import { Input, InputWrapper, Line } from "./theme";
import { Tooltip } from "./tooltip";

type TRangeInput = {
    min: number;
    max: number;
    width?: string;
    withTooltip?: boolean;
    label?: string;
    withBottomInfo?: boolean;
};

const RangeInput = ({ min, max, width = "200px", label, withTooltip = true, withBottomInfo }: TRangeInput) => {
    const [range, setRange] = useState(min);
    const [step, setStep] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const getRange = (ev: any) => {
        setRange(ev.target.value);
    };

    useEffect(() => {
        const rangeLinePadding = 24;
        const calcStep = (ref.current!.offsetWidth - rangeLinePadding) / Number(ref.current!.max);
        setStep(calcStep);
    }, []);

    const widthBeforeTumb = range * step;

    return (
        <div>
            {label && <Label>{label}</Label>}
            <InputWrapper $width={width}>
                <Input type="range" id="range" min={min} max={max} value={range} onChange={getRange} ref={ref} />
                <Line $widthBeforeTumb={widthBeforeTumb}></Line>
                {withTooltip && <Tooltip transformWidth={widthBeforeTumb}>{range}</Tooltip>}
                {withBottomInfo && <BottomInfo min={String(min)} max={String(max)} />}
            </InputWrapper>
        </div>
    );
};

export default RangeInput;
