import { ValueBlock, Wrapper } from "./theme";

const BottomInfo = ({ min, max }: { min?: string; max?: string }) => {
    return (
        <Wrapper>
            <>
                {min && <ValueBlock>{min}</ValueBlock>}
                {max && <ValueBlock>{max}</ValueBlock>}
            </>
        </Wrapper>
    );
};

export default BottomInfo;
