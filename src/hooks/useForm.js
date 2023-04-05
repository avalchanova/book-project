import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values);
        setValues(initialValues); //зануляваме формата след като сме изпратили датата <3 
    };

    const changeValues = (newValues) => {
        // TODO: check if values are the same as the form values, if there isnt any new property and such
        setValues(newValues);
    };

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues
    };
};