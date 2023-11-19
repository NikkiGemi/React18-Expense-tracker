interface Props {
  setCategory: (category: string) => void;
}
const ExpenseFilter = ({ setCategory }: Props) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Groceries">Groceries</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
