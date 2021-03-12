import "./Testimonials.scss";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials(){
    return(
        <section className="testimonials">
            <TestimonialCard
                image="https://picsum.photos/1080/1920?random=1"
                copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit fuga fugit magni perferendis. Alias odio aliquam est, iste veniam saepe voluptatem consectetur quam officiis, sapiente porro ipsa optio quos."
            />
    
            <TestimonialCard
                image="https://picsum.photos/1080/1920?random=2"
                copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit fuga fugit magni perferendis. Alias odio aliquam est, iste veniam saepe voluptatem consectetur quam officiis, sapiente porro ipsa optio quos."
            />
    
            <TestimonialCard
                image="https://picsum.photos/1080/1920?random=3"
                copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit fuga fugit magni perferendis. Alias odio aliquam est, iste veniam saepe voluptatem consectetur quam officiis, sapiente porro ipsa optio quos."
            />
        </section>
    );
};