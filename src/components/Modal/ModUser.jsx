export const ModUser = (data) => {
    return(
    <div className="card" style="width: 18rem;">
       
        <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.about}.</p>
            <p className="card-text">{data.email}.</p>
            <a href="#" className="btn btn-primary">Изменить</a>
        </div>
    </div>)
}