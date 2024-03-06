export default function CustomCheckboxLabel(props){
    return(
        <div className={`col-md-${props.col} mb-3`}>
          <input className="form-check-input" onChange={props.onChange} id={props.id} type="checkbox" />
          <label className="form-check-label ms-1" htmlFor={props.id}>{props.texto}</label>          
        </div>  
    )
}