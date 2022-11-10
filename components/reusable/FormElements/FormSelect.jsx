const FormSelect = ({ value, onChange, options }) => (
  <select className="form__select" {...{ value, onChange }}>
    <option>--Select--</option>
    {options.map((option, index) => (
      <option value={option.value} key={index}>
        {option.name}
      </option>
    ))}
  </select>
);

export default FormSelect;
