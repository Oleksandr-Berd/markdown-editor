
type Props = {
  icon: string;
  typeName: string;
}

const FunctionButton:React.FC<Props> = ({icon, typeName}) => {
    return (
      <button>
        <img src={icon} alt={typeName} />
      </button>
    );
}
 
export default FunctionButton;