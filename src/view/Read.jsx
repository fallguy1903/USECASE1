import Button_component from "../Button_component"
export default function Read(){
    const content = localStorage.getItem("journal");
    return(
        <div>
            <h1>You can read your entries here</h1>
            <h1>{content}</h1>
            <a href="/"><Button_component name="Back"/></a>
        </div>
    )
}