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
            <h2 id="shimmer_h2">Please! Wait for Response....</h2><br/>
            <div  id="shimmer_list">
            {Array(10).fill("").map((e,idx)=>{
                return myDiv(idx);
            })}
            </div>
        </div>
    )
}
export default ShimmerEffect;