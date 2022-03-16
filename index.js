// const page = (
//     <div>
//         <img src="./react-logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" />
                </nav>
            </header>
            <hi>Reasons I'm excited to learn React</hi>
            <ol>
                <li>Money</li>
                <li>Projects</li>
                <li>Versatility</li>
            </ol>
            <footer>© 2022 Douglas development. All rights reserved.</footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));