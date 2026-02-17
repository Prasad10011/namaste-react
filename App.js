
// const root = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world from Javascript!!";
// root.appendChild(heading);

const heading = React.createElement("h1", {id:"heading"}, "Hello world from react");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);