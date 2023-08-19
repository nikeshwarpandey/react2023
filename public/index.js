const el = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "headchild1" }, "You are child 1")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", { id: "headchild2" }, "You are child 2")
  ),
]);

const baseEl = ReactDOM.createRoot(document.getElementById("root"));
baseEl.render(el)