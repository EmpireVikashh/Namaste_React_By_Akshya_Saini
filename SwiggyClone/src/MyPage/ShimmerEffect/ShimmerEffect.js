const ShimmerEffect = ()=>{
    function myDiv(myKey){
    //    console.log(myKey);
       return (<div className="shimmer_child" key={myKey}>
               <div className="shimmer_item" ></div>
               <div className="shimmer_item_name" ></div>
        </div>)
    }

    return(
        <div id="shimmer">
            <h2 className="shimmer_h2">Please! Wait for Response....</h2>
            <div  id="shimmer_list">
            {Array(22).fill("").map((e,idx)=>{
                return myDiv(idx);
            })}
            </div>
        </div>
    )
}
export default ShimmerEffect;