import Button from '@mui/material/Button';

export default function Button_component({name,onClick}){
    return(
        <div>
        <Button variant="contained"  onClick={onClick} sx={{backgroundColor:"#284B63",margin:"10px" }}>{name}</Button>
        </div>
    )
}