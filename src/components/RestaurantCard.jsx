const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        name,
        avgRatting,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData?.data;
    return(
        <div className="res-card">
            <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rsjpkmrbzsuppwinogwe" />
            <h4>{name}</h4>
            <h5>{cuisines}</h5>
            <h5>{avgRatting}</h5>
            <h5>{costForTwo/100}</h5>
            <h5>{deliveryTime} minutes</h5>

        </div>
    )
}
export default RestaurantCard;