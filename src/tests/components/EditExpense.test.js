import React from "react";
import { EditExpensePage } from "../../components/EditExpensePage";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";

let onEditExpense, onRemoveExpense, expense, history, wrapper;

beforeEach(() => {
  onEditExpense = jest.fn();
  onRemoveExpense = jest.fn();
  //   expense = { id: jest.fn(() => "0") };
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      onEditExpense={onEditExpense}
      onRemoveExpense={onRemoveExpense}
      history={history}
      expense={expenses[2]}
    />
  );
});

test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(onEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[1]);
});
