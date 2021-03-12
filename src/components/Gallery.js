import Carousel from "react-grid-carousel";
import CarouselItem from "./CarouselItem";
import "./Gallery.scss";

export default function Gallery(){
    return(
        <Carousel 
            cols={1}
            rows={1}
            gap={0}
            loop
            autoplay={5000}
        >
            <Carousel.Item>
                <CarouselItem
                    image="https://picsum.photos/1920/1080?random=1"
                    copy="Tissemand, tissemand... tissemand!"
                    ctaCopy="Klik her, asswipe"
                    ctaLink="/founders"
                />
            </Carousel.Item>

            <Carousel.Item>
                <CarouselItem
                    image="https://picsum.photos/1920/1080?random=2"
                    copy="Vil du gerne blive klogere?"
                    ctaCopy="Sur røv"
                    ctaLink="/founders"
                />
            </Carousel.Item>

            <Carousel.Item>
                <CarouselItem
                    image="https://picsum.photos/1920/1080?random=3"
                    copy="Bush did 9/11"
                    ctaCopy="Ding ding, the truth is in"
                    ctaLink="/founders"
                />
            </Carousel.Item>
        </Carousel>
    );
};