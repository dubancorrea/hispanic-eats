const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.image} alt={props.name} className="restaurant-img" />
            <h3>{props.name}</h3>
            <h4>{props.cuisine}</h4>
            <a href={props.link} target="_blank" rel="noreferrer">
                <button className="view-button">View Menu</button>
            </a>
        </div>
    );
};

export default Card;