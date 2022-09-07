import { TooltipWrap } from "./theme";

const Tooltip = ({ children, transformWidth }: { children: React.ReactNode; transformWidth: number }) => {
    return <TooltipWrap $transformWidth={transformWidth}>{children}</TooltipWrap>;
};

export default Tooltip;
