const Header = () => {
    return <h1>Madlibs!</h1>
}

const Noun1 = () => {
    return (
        <input type="text" placeholder="Noun 1"></input>
    )
}

const Noun2 = () => {
    return (
        <input type="text" placeholder="Noun 2"></input>
    )
}

const Adjective = () => {
    return (
        <input type="text" placeholder="Adjective"></input>
    )
}

const Color = () => {
    return (
        <input type="text" placeholder="Color"></input>
    )
}

const GetStory = () => {
    return (
        <input type="button" value="Get Story"></input>
    )
}

const App = () => {
    return(
        <div>
            <Header />
            <Noun1 /><br />
            <Noun2 /><br />
            <Adjective /><br />
            <Color /><br />
            <GetStory />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));