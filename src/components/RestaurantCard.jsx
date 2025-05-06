const RestaurantCard = (props) => {
    const { resData } = props;
console.log(resData)
    const {
        name,
        avgRating,
        cuisines,
        costForTwo,
        cloudinaryImageId,
        sla,
    } = resData?.info;
    return(
        <div className="m-[4px] p-[4px] w-[200px]">
            <img className="res-img w-[200px]" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
            <h4 className="italic">{name}</h4>
            <h5>{cuisines}</h5>
            <h5>{avgRating}</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla.slaString}</h5>

        </div>
    )
}

//Higher Order Component

export const  withOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="bg-green-200 text-green-700 p-1 m-2 rounded">Open</label>
                
                
                <RestaurantCard {...props}/>
            </div>
        );
    };
};
export default RestaurantCard;