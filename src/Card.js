import "./index.css";
import location from "./location.svg";
export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} className="card-image"/>
            <div className="card-maintext">
            <div className="card--text">
                <img src={location} className="card--location"/>
                <span className="card--country">{props.location}</span>
                <a href={props.googleMapsUrl} className="card--google">View on Google Maps</a>
            </div>
            <h1 className="card--title">{props.title}</h1>
            <h3 className="card--dates">{props.startDate} - {props.endDate}</h3>
            <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
}