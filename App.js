// const heading = React.createElement("h1", {}, "Hi Arun Welcome to React World");

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)


//     <div div id = "parent" >
//         <div id="child">
//             <h1>Hi Iam H1 Tag</h1>
//        </div>
//    </div>


const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hi i am H1 tag"),React.createElement("h2", {}, "Hi I am h2 Tag")]
));

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)