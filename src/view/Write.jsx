    import InputBox from '../Input_box';
    import Button_component from '../Button_component';
    export default function Write({name}){
        localStorage.setItem("journal","Hey, this is my first Entry");
        return(
            <div className='journal'>
            <h1 className='title'>Digital Journal </h1>
            <InputBox/>
            <Button_component name="Save"/>
            <a href="Read"><Button_component name="Read"/></a>
            </div>
            );
    }