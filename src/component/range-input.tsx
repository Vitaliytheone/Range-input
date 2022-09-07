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
    onSetValue?: (value: number) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const RangeInput = ({
    min,
    max,
    label,
    value,
    width = "200px",
    withTooltip = true,
    withBottomInfo,
    onSetValue,
    ...props
}: TRangeInput) => {
    const [range, setRange] = useState<number>(value ?? 0);
    const [step, setStep] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const onRecordValue = (e: React.SyntheticEvent<HTMLInputElement>) => {
        onSetValue && onSetValue(Number((e.target as HTMLInputElement).value));
    };

    const getRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRange(Number(e.target.value));
        props.onChange && props.onChange(e);
    };

    useEffect(() => {
        const rangeLinePadding = 24;
        const calcStep = (ref.current!.offsetWidth - rangeLinePadding) / Number(ref.current!.max);
        setStep(calcStep);
    }, []);

    const widthBeforeTumb = range * step;
    const isDisplayTooltip = range > min && range < max && withTooltip;

    return (
        <Wrapper $width={width}>
            {label && <Label>{label}</Label>}
            <InputWrapper>
                <Line></Line>
                <Input
                    {...props}
                    type="range"
                    id="range"
                    min={min}
                    max={max}
                    value={range}
                    onChange={getRange}
                    onMouseUp={onRecordValue}
                    onTouchEnd={onRecordValue}
                    ref={ref}
                />
                <Line $isActive $widthBeforeTumb={widthBeforeTumb}></Line>
                {isDisplayTooltip && <Tooltip transformWidth={widthBeforeTumb}>{range}</Tooltip>}
            </InputWrapper>
            {withBottomInfo && <BottomInfo min={String(min)} max={String(max)} />}
        </Wrapper>
    );
};

export default RangeInput;
