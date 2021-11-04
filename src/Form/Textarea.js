import react from "react";
import { FormGroup, Input, Label } from "reactstrap";

function Textarea(props) {
    return (
        <div>
            <FormGroup>
                <Label >{props.title}</Label>
                <Input type="textarea" />
            </FormGroup>
        </div>
    )
}

export default Textarea