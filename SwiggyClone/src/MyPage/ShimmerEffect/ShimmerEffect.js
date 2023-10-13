const ShimmerEffect = () => {
    function myDiv(myKey) {
        //    console.log(myKey);
        return (<div className="shimmer_child" key={myKey}>
            <div className="shimmer_item" ></div>
            <div className="shimmer_item_name" ></div>
        </div>)
    }

    return (
        <div id="shimmer">
            <h2 className="shimmer_header">
                <div className="home-shimmer"></div>
                <div className="search-shimmer"></div>
                <div className="cart-shimmer"></div>
            </h2>
            <div className="big-carousel-shimmer">
                <div className="child-big-carousel-shimmer"></div>
                <div className="child-big-carousel-shimmer"></div>
                <div className="child-big-carousel-shimmer"></div>
            </div>
            <div className="circle-carousel-shimmer">
                <div className="child-circle-carousel-shimmer"></div>
                <div className="child-circle-carousel-shimmer"></div>
                <div className="child-circle-carousel-shimmer"></div>
                <div className="child-circle-carousel-shimmer"></div>
                <div className="child-circle-carousel-shimmer"></div>
            </div>
            <div id="shimmer_list">
                {Array(10).fill("").map((e, idx) => {
                    return myDiv(idx);
                })}
            </div>
        </div>
    )
}
export default ShimmerEffect;