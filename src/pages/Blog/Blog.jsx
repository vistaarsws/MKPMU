import "./Blog.css";
import { blogs_page } from "../../utils/Constant";
import { useParams } from "react-router-dom";

export default function Blog() {
  const { id } = useParams();

  const blog = blogs_page.cards.find((b) => b.id == id);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="blog_container">
      <header>
        <h1>{blog.title}</h1>
        {/* 
        <div>
          <p>by <span>{blog.author.name}</span></p>
          <p>{blog.date}</p>
        </div> 
        */}
      </header>

      {blog.picture && (
        <figure>
          <img src={blog.picture} alt={blog.title} />
        </figure>
      )}
      {blog.description && <p>{blog.description}</p>}

      {blog.content && (
        <main className="blogMainContainer">
          {blog.content.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <p key={index} className="blogContent_paragraph">
                  {item.text}
                  <br />
                  <br />
                </p>
              );
            } else if (item.type === "heading") {
              return (
                <h2 key={index} className="blogContent_heading">
                  {item.text}
                  <br />
                </h2>
              );
            } else if (item.type === "subheading") {
              return (
                <h3 key={index} className="blogContent_subHeading">
                  {item.text}
                </h3>
              );
            } else if (item.type === "points") {
              return (
                <ul key={index} className="blogContent_listContainer">
                  {item.items.map((listItem, listIndex) => (
                    <li key={listIndex}>{listItem}</li>
                  ))}
                  <br />
                  <br />
                </ul>
              );
            } else if (item.type === "image") {
              return (
                <>
                  <img
                    key={index}
                    src={item.src}
                    alt={item.alt}
                    className="blogContent_picture"
                  />
                  <br />
                  <br />
                </>
              );
            } else if (item.type === "video") {
              return (
                <div key={index} className="blogContent_video">
                  <video controls>
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <br />
                  <br />
                </div>
              );
            } else {
              return null;
            }
          })}
        </main>
      )}
    </div>
  );
}
