export default function InputBox({value,onChange})
{
    return(
    <textarea
        rows={10}
        cols={10}
        value={value}
        onChange={onChange}
    > 
    </textarea>
    );
}