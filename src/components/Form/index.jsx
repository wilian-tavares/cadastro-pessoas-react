import './styles/form.css'

export default function Form(props){
    const {type, placeholder} = props
    return (
        <input type={type} placeholder={placeholder}></input>
    )
}