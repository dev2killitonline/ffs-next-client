const GridForm = ({ children, onSubmit }) => (
  <form
    className="form--grid gutter"
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}
  >
    {children}
  </form>
);

export default GridForm;
