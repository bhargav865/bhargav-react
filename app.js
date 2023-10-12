const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"hello bhargav")));

const root =ReactDom.createRoot( document.getElementById("root"));

root.render(parent)