    import InputBox from '../Input_box';
    import Button_component from '../Button_component';
    import { useState,useEffect } from 'react';
    export default function Write({name}){
        const[content,setContent] = useState("");
        function handleChange(evt){
            setContent(evt.target.value);
        }
        useEffect(() => {
            const savedJournal = localStorage.getItem("journal");
            if (savedJournal) {
                setContent(savedJournal);
            }
        }, []);
        function handleClick()
        {
            localStorage.setItem("journal",content);
        }
        return(
            <div className='journal'>
            <h1 className='title'>Digital Journal </h1>
            <InputBox onChange={handleChange}/>
            <Button_component name="Save" onClick={handleClick}/>
            <a href="Read"><Button_component name="Read"/></a>
            </div>
            );
    }