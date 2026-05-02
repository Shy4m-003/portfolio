import './Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="blog-container">
          <div className="blog-content">
            <h2 className="section-title text-gradient" style={{ textAlign: 'left', marginBottom: '1rem' }}>Writing & Insights</h2>
            <p className="blog-intro">
              Sharing my thoughts on backend architecture, system design, and software engineering practices.
            </p>
          </div>
          
          <div className="blog-cards">
            <a 
              href="https://medium.com/@smartynani2005/hardcoding-vs-frameworks-how-frameworks-save-time-in-software-development-ae1eaf9a0cab" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="blog-card"
            >
              <div className="blog-tag">Tech Article</div>
              <h3 className="blog-title">Hardcoding vs Frameworks: How Frameworks Save Time in Software Development</h3>
              <p className="blog-excerpt">
                An exploration of why relying on established frameworks is generally better for scalable software development compared to hardcoding everything from scratch.
              </p>
              <span className="read-more">Read on Medium &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
