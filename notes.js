// 1. The first item in bracket is what I want to render, the second is where I want to render it
// ReactDOM.render(<h1>Hello friends</h1>, document.getElementById("root"))
// ReactDOM.render(
//     <ul><li>Apples</li><li>Bananas</li></ul>, 
//     document.getElementById("root")
// )

// -------------

// 2. name of the function is the name of the component
// function MainContent() {
//     return (
//         <div>
//             <h1>The Main Page</h1>
//         </div>
//     )
// }

// ReactDOM.render(
//     <div>
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

// -------------

// 3. Declarative v. Imperative

// Declarative: What should be done? "Tell me what to do, and I'll worry about hwo to get it done."
// React:
// ReactDOM.render(<h1 className="header">Hello friends</h1>, document.getElementById("root"))

// Imperative: How should it be done? "Desscribe to me every step on how to do something, and I'll do it"
// Vanilla JS:

// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

// -------------

// 4. JSX: JavaScript XML
// A flavour of Jaavascript that looks a lot like HTML; makes React declarative instead of imperative
// JSX gives us plain old JavaScript objects, which describe the element we want React to put on the page for us
// We need to make sure we are only returning a single parent element, can't return two siblings. For example, this throws an error:
// ReactDOM.render(
//     <h1 className="header">This is JSX</h1><p>This is a paragraph</p>, 
//     document.getElementById("root")
// )

// However, if you wrap these two elements in a div, it will work, and you can also throw it into a variable:
// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

// challenge:
// const nav = (
//     <nav>
//         <h1>My Website is Awesome</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(
//     nav,
//     document.getElementById("root")
// )