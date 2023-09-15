import { Images } from "../../Helper/ImageFile";
const Carousel = ({carouselData})=>{
    console.log(carouselData);
    return(
        <div className="carousel-container">
            {carouselData.map((data)=>{
                return <img className="carouselImages" src={Images + data.imageId} alt="carouselImages" key={data.id}/>
                
            })}
            
        </div>
    )
}
export default Carousel;