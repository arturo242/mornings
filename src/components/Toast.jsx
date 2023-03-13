
export const Toast = ({ image, name, description }) => {
    return (
        <div className="card">
            <img src={image} className="card-img-top"/>
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <button  className="btn btn-dark">Añadir</button>
            </div>
        </div>
    )
}
