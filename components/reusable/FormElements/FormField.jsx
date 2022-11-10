const FormField = ({ label, columns, col_sm, col_md, col_lg, children }) => (
  <div
    className={`form__field col--${columns} col--sml--${
      col_sm || columns
    } col--med--${col_md} col--lrg--${col_lg}`}
  >
    <label className="form__label">{label}</label>
    {children}
  </div>
);

export default FormField;
