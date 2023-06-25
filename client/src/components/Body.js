import React from 'react';

const Body = ({ instagramPosts, twitterPosts, tiktokPosts, userRole }) => {
  return (
    <div className="body">
    <div className='banner-container'>
      <h2>Banner</h2>
    </div>
    <div className='search-container'>
      <h2>Buscadorrr</h2>
    </div>
    <div className='social-section'>
      <h2>Seccion de redes</h2>
    </div>
    <div className='categories-container'>
      <h2>grilla con categorias (deportes, cocina, etc etc, a lo pinterest)</h2>
    </div>
      {/* <div className="section">
      {userRole === 'admin' ? (
        <h2>Bienvenido, administrador</h2>
      ) : (
        <h2>Bienvenido, usuario</h2>
      )}
        <h2>Instagram</h2>
        {instagramPosts.map((post) => (
          <div key={post.id}>
            <img src={post.imageUrl} alt="Instagram Post" />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Twitter</h2>
        {twitterPosts.map((post) => (
          <div key={post.id}>
            <p>{post.text}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>TikTok</h2>
        {tiktokPosts.map((post) => (
          <div key={post.id}>
            <video src={post.videoUrl} controls />
            <p>{post.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Body;
