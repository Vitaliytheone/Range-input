import { LabelStyled } from "./theme";

const Label = ({ children }: { children: React.ReactNode }) => {
    return <LabelStyled>{children}</LabelStyled>;
};

export default Label;
