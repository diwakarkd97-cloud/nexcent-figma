import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import BlogCard from "../cards/BlogCard";
import { blog } from "../../data/content";
import "./Blog.css";

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <SectionHeading title={blog.title} text={blog.text} textWidth="39.25rem" />
      <Container className="blog__grid">
        {blog.posts.map((p) => <BlogCard key={p.id} {...p} />)}
      </Container>
    </section>
  );
}
