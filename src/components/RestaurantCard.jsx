const RestaurantCard = (props) => {
    const { resData } = props;
console.log(resData)
    const {
        name,
        avgRating,
        cuisines,
        costForTwo,
        cloudinaryImageId,
        deliveryTime,
    } = resData?.info;
    return(
        <div className="res-card">
            <img className="res-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
            <h4>{name}</h4>
            <h5>{cuisines}</h5>
            <h5>{avgRating}</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime} minutes</h5>

        </div>
    )
}
export default RestaurantCard;