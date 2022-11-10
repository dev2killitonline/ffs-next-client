import FormField from "./FormField";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

export const InputField = ({
  value,
  onChange,
  columns = 12,
  col_sm,
  col_md,
  col_lg,
  label,
  type,
  rest,
}) => (
  <FormField {...{ columns, col_sm, col_md, col_lg, label }}>
    <FormInput {...{ value, onChange, type }} {...rest} />
  </FormField>
);
export const SelectField = ({
  value,
  onChange,
  columns = 12,
  label,
  options,
  col_sm,
  col_md,
  col_lg,
}) => (
  <FormField {...{ col_sm, col_md, col_lg, columns, label }}>
    <FormSelect {...{ value, onChange, options }} />
  </FormField>
);
