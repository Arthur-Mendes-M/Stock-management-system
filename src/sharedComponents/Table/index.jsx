import { Styled_div } from "./styles"

export const TableContainer = ({maxheight = "inherit", children}) => {
    return (
        <Styled_div $maxheight={maxheight}>
            <table>
                {children}
            </table>
        </Styled_div>
    )
}