import { useHistory } from "react-router-dom";

function HostSelectionPage() {
    let history = useHistory();

    function handleClick() {
        history.push("/home");
    }
    
    return (
        <div>
            <h1>UPON HOST SELECTION PAGE </h1>
            <button type="button" onClick={handleClick}>
                Continue
            </button>
        </div>
    )
}

export default HostSelectionPage;