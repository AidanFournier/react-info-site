// The first item in bracket is what I want to render, the second is where I want to render it
// ReactDOM.render(<h1>Hello friends</h1>, document.getElementById("root"))
// ReactDOM.render(
//     <ul><li>Apples</li><li>Bananas</li></ul>, 
//     document.getElementById("root")
// )

// name of the function is the name of the component
function MainContent() {
    return (
        <div>
            <h1>The Main Page</h1>
        </div>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
)