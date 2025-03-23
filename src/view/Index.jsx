import Button_component from "../Button_component"
export default function Index(){
    return(
        <>
            <h1>What do you want to do?</h1>
            <a href="/Write"><Button_component name="Write"/></a>
            <a href="Read"><Button_component name="Read"/></a>
        </>
    )
}