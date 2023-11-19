import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  addExpense: () => void;
}

const schema = z.object({
  description: z.string().min(3, "Description must be atleast 3 characters"),
  amount: z.number({ invalid_type_error: "Amount is required" }).min(1),
  category: z.string().min(3, "Category is mandatory"),
});
type FormData = z.infer<typeof schema>;

const ExpenseForm = ({ addExpense }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form className="expenseForm" onSubmit={handleSubmit(addExpense)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors && <p className="text-danger">{errors.description?.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors && <p className="text-danger">{errors.amount?.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          name="category"
          id="category"
          className="form-select"
        >
          <option selected></option>
          <option value="Utilities">Utilities</option>
          <option value="Groceries">Groceries</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {errors && <p className="text-danger">{errors.category?.message}</p>}
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Add expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
