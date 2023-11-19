import { CATEGORIES } from "../../App";

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
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
