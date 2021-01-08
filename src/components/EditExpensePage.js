import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export const EditExpensePage = (props) => {
  const onSubmit = (expense) => {
    props.onEditExpense(props.expense.id, expense);
    props.history.push("/");
  };
  const onClick = () => {
    props.onRemoveExpense({ id: props.expense.id });
    props.history.push("/");
  };
  return (
    <div>
      <ExpenseForm expense={props.expense} onSubmit={onSubmit} />
      <button onClick={onClick}>Remove</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  onEditExpense: (id, expense) => dispatch(editExpense(id, expense)),
  onRemoveExpense: (id) => dispatch(removeExpense(id)),
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
