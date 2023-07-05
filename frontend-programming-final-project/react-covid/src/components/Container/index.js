import StyledContainer from "./ContainerStyledComponent"

const Container = ({children}) => {
    return(
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container;