import { RangInput } from "./component";
import styled from "styled-components";
import { useCallback, useState } from "react";

const Wrapper = styled.div`
    padding: 48px;
`;

const ValueBlock = styled.div`
    margin-top: 36px;
    font-size: 20px;
`;

function App() {
    const [value, setValue] = useState(0);
    const onSetValue = useCallback((num: number) => {
        setValue(num);
    }, []);

    return (
        <Wrapper>
            <RangInput min={0} max={200} width="400px" label="Range input" onSetValue={onSetValue} withBottomInfo />
            <ValueBlock>Value when mouse / touch has ended: {value}</ValueBlock>
        </Wrapper>
    );
}

export default App;
