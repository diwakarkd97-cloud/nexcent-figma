import { ArrowRight } from "../ui/Icons";
import "./BlogCard.css";
export default function BlogCard({ image, title, href = "#blog" }) {       
  return (
    <article className="blog-card">
      <img className="blog-card__image" src={image} alt="" loading="lazy" />  
      <div className="blog-card__body">
        <h3>{title}</h3>                                            
        <a href={href}>Readmore <ArrowRight size={24} /></a>        
      </div>
    </article>
  );
}
