import React from 'react';
import "./styles.css"
import { useField, splitFormProps } from "react-form";

const InputField = React.forwardRef((props, ref) => {
    const [field, fieldOptions, rest] = splitFormProps(props);
    const {
        meta: { error, isTouched, isValidating },
        getInputProps
    } = useField(field, fieldOptions);
    return (
        <>
            <input {...getInputProps({ ref, ...rest })} type={rest.type} />{" "}
            {isValidating ? (
                <em>Validating...</em>
            ) : isTouched && error ? (
                <em>{error}</em>
            ) : null}
        </>
    );
});

export default InputField
