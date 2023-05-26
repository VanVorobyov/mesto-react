import {useState, useCallback} from 'react';

function useValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: e.target.validationMessage});
        setIsValid(e.target.closest('form').checkValidity());
    };

    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = true) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);


    return {values, errors, isValid, setValues, setErrors, setIsValid, handleChange, resetForm};
}

export default useValidation;