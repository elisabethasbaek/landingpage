import "./CarouselItem.scss";

export default function CarouselItem({image, copy, ctaLink, ctaCopy}){
    return(
        <article className="carouselItem">
            <img src={image} alt="" className="carouselItem__image" />
            <section className="carouselItem__content">
                <p className="carouselItem__copy">{copy}</p>
                <a 
                    href={ctaLink}
                    className="carouselItem__CTA"
                    //eslint-disable-next-line
                    onclick={gtag("event", "cta", ctaLink)}
                >{ctaCopy}</a>
            </section>
        </article>
    );
};
