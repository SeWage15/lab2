export default function Card(props){
    console.log(props);
    return(
        <div className={props.sale ? "card card-sale" : "card"}>
            
            <img src={props.image} alt="" width="150px"/>
            <h4>{props.name}</h4>
            <h5>{props.hotel}</h5>
            <h5>{props.ratings}</h5>
            <h5>{props.price}<h2 style={{color:"red"}}></h2></h5>
            {props.sale ? <h2 style={{color:"red"}}>Sale</h2> : <h2>&nbsp;</h2>}
            
        </div>
    )
}