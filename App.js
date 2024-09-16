const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("child", { id: "child" }, [
        React.createElement("h1", { id: "heading1" }, "i am h1 tag"),
        React.createElement("h2", { id: "heading2" }, "i am h2 tag")]),
    React.createElement("child", { id: "child" }, [
        React.createElement("h1", { id: "heading3" }, "i am h1 tag"),
        React.createElement("h2", { id: "heading4" }, "i am h2 tag")]),
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);