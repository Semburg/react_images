const WeatherItem = (props) => {
    // let imageTest = props.urlImg
    
    return ( 
        <div className="weather">
            <h2>{props.day}</h2>
            <img src={props.urlImg} alt=""/>
            <p><span>{props.maxTemp } </span> <span>/ {props.minTemp}</span></p>
        </div>
     );
}
 
export default WeatherItem;