import React from "react";
import ReactDOM from "react-dom";
import ItemList from "../item-list";

test('renders "no items" when the item list is empty', () => {
  const container = document.createElement("div");
  ReactDOM.render(<ItemList items={[]} />, container);
  expect(container.textContent).toMatch("no items");
});
