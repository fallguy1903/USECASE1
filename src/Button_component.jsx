import Button from '@mui/material/Button';

export default function Button_component({name}){
    return(
        <div>
        <Button variant="contained"  sx={{backgroundColor:"#284B63",margin:"10px" }}>{name}</Button>
        </div>
    )
}