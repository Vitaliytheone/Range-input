import { RangInput } from "./component";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 48px;
`;

function App() {
    return (
        <Wrapper>
            <RangInput min={0} max={300} width="400px" label="Range input" withBottomInfo />
        </Wrapper>
    );
}

export default App;
