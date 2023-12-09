import * as SC from "./ErrorPageStyled"

type Props = { 
    message:string
}

const ErrorPage:React.FC<Props> = ({message}) => {
    return ( <SC.ErrorWrapper>
        <h1>{message}</h1>
    </SC.ErrorWrapper> );
}
 
export default ErrorPage;