const FormInput = ({ value, onChange, type, rest }) => (
  <input className="form__input" {...{ value, onChange, type }} {...rest} />
);

export default FormInput;
