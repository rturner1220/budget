import React from "react";
import { useBudgets } from "../contexts/BudgetsContext";
import BudgetCart from "./BudgetCart";

export default function TotalBudgetCard(props) {
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budget) => total + budget.max, 0);
  if (max === 0) return null;
  return <BudgetCart amount={amount} name="Total" gray max={max} hideButtons />;
}
