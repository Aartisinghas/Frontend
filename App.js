
        const parent= React.createElement("div", { id: "parent" },
        React.createElement("div", { id: "child1" },
           [  React.createElement("h1",{}, "I am child 2"),  
            React.createElement("h4",{}, "I am child 2")

          ],
           [  React.createElement("h1",{}, "I am child 2"),  
            React.createElement("h4",{}, "I am child 2")
            
          ])      
        );

        console.log(parent);

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);