import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Feed = () => {
    const [posts,setPosts] = useState([])

useEffect(()=>{
    axios.get("http://localhost:8080/posts")
    .then((res)=>{
        setPosts(res.data.posts)
    })
},[])

    return (
      <>
          {/* --- NEW TOP NAV BAR --- */}
          <nav className="top-nav">
              <img src="/logo.png" alt="Oreogram Logo" className="oreogram-logo-img" />
          </nav>

          <section className='feed-section'>
              {posts.length > 0 ? (
                  posts.map((post) => {
                      // Formats the date to look like "JUN 16, 2026"
                      const formattedDate = new Date(post.created).toLocaleDateString('en-US', {
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                      }).toUpperCase();

                      return (
                          <div key={post._id} className="ig-post-card">
                              
                              <img src={post.image} alt={post.caption} className="ig-image" />
                              
                              <div className="ig-details">
                                  
                                  <div className="ig-action-bar">
                                      <img src="/like.png" alt="Like" className="action-icon-img" />
                                      <img src="/send.png" alt="Share" className="action-icon-img" />
                                  </div>

                                  <div className="ig-likes">
                                      <strong>{post.likes} likes</strong>
                                  </div>
                                  
                                  <div className="ig-caption">
                                      {post.caption}
                                  </div>
                                  
                                  <div className="ig-date">
                                      {formattedDate}
                                  </div>
                              </div>
                              
                          </div>
                      );
                  })
              ) : (
                  <p className="no-posts">No posts yet.</p>
              )}
          </section>
      </>
  );
}
export default Feed