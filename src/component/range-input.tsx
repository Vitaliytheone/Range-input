import { useEffect, useState, useRef } from "react";
import { BottomInfo } from "./bottom-info";
import { Label } from "./label";
import { Input, InputWrapper, Line, Wrapper } from "./theme";
import { Tooltip } from "./tooltip";

type TRangeInput = {
    min: number;
    max: number;
    width?: string;
    withTooltip?: boolean;
    label?: string;
    withBottomInfo?: boolean;
    value?: number;
} & React.InputHTMLAttributes<HTMLInputElement>;

const RangeInput = ({
    min,
    max,
    width = "200px",
    label,
    withTooltip = true,
    withBottomInfo,
    value,
    ...props
}: TRangeInput) => {
    const [range, setRange] = useState<number>(value ?? 0);
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
    const isDisplayTooltip = range > min && range < max && withTooltip;

    return (
        <Wrapper>
            {label && <Label>{label}</Label>}
            <InputWrapper $width={width}>
                <Line></Line>
                <Input
                    {...props}
                    type="range"
                    id="range"
                    min={min}
                    max={max}
                    value={range}
                    onChange={getRange}
                    ref={ref}
                />
                <Line $isActive $widthBeforeTumb={widthBeforeTumb}></Line>
                {isDisplayTooltip && <Tooltip transformWidth={widthBeforeTumb}>{range}</Tooltip>}
                {withBottomInfo && <BottomInfo min={String(min)} max={String(max)} />}
            </InputWrapper>
        </Wrapper>
    );
};

export default RangeInput;
