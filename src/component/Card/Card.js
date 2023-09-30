 import './Card.css'

const Card=({name,number})=>{
    return(

        <>
            <div className="card">
                <p className="name">{name}</p>
                <p><strong>Number:</strong>&nbsp;{number} </p>
            </div>
        </>
    )

}

export default Card;