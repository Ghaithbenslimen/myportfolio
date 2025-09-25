"use client"

import "./PortfolioPage.css"

const PortfolioPage = ({ setCurrentPage }) => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-container">
        <button className="back-button" onClick={() => setCurrentPage("projects")}>
          ← Back to Projects
        </button>

        <div className="portfolio-header">
          <h1>Video Portfolio</h1>
          <p>Showcasing my best edits, montages, and tutorials</p>
        </div>

        <div className="portfolio-content">
          <div className="video-section">
            <h2>GNG ESPORTS Montages</h2>
            <div className="video-grid">
              <div className="video-item">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FGnGesportstn%2Fvideos%2F1304471527688981%2F&show_text=0&width=560"
                  title="Valorant Montage"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-item">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FGnGesportstn%2Fvideos%2F725402656501265%2F&show_text=false&width=560"
                  title="Valorant Gameplay"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-item">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FGnGesportstn%2Fvideos%2F1042084124192768%2F&show_text=false&width=560"
                  title="Gaming Highlights"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

               <div className="video-item">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FGnGesportstn%2Fvideos%2F559138392972419%2F&show_text=false&width=560&t=0"
                  title="Gaming Highlights"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>


            </div>
          </div>
          

          <div className="video-section">
            <h2>Jelyfish Edits</h2>
            <div className="video-grid">
              <div className="video-item">
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/ZppH3acY-q8?si=zNNRDQ0nD_MFdvX8"
                    title="GNG ESPORTS Montage 1"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
              <div className="video-item">
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/iEkJhQ_aS_o?si=2EUn1PQ32q3sinrS"
                    title="GNG ESPORTS Montage 2"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
              <div className="video-item">
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/By_An59kYSY?si=JHHKr217g265-GoP"
                    title="GNG ESPORTS Montage 2"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="video-section">
            <h2>Tutorials & Editing</h2>
            <div className="video-grid">
              <div className="video-item">
                <iframe
                  src="https://www.youtube.com/embed/p-pLrKkTZAY"
                  title="Video Editing Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-item">
                <iframe
                  src="https://www.youtube.com/embed/TukDCzZ3wRI?si=cjxg3zhIvJ6s8EB4"
                  title="Video Editing Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-item">
                <iframe
                  src="https://www.youtube.com/embed/hdImJRetv2c?si=ZYwcpxeNi-_XXAdC"
                  title="Video Editing Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="video-item">
                <iframe
                  src="https://www.youtube.com/embed/p9M63uK9qKE?si=ipuUhPvGXF3R85AA"
                  title="Video Editing Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>


            </div>
          </div>

          <div className="video-section">
            <h2>My Social Channels</h2>
            <div className="channels-grid">
              <div className="channel-card">
                <h3>YouTube</h3>
                <p>Gaming content, montages, and tutorials</p>
                <a href="https://www.youtube.com/@syrex5973" target="_blank" rel="noopener noreferrer" className="channel-link youtube">
                  Visit YouTube Channel
                </a>
              </div>
              <div className="channel-card">
                <h3>Facebook</h3>
                <p>My Facebook</p>
                <a href="https://www.facebook.com/ghaith.ben.slimen.66714" target="_blank" rel="noopener noreferrer" className="channel-link facebook">
                  Visit Facebook Page
                </a>
              </div>
              <div className="channel-card">
                <h3>Instagram</h3>
                <p>Dont forget to check out my instagram</p>
                <a href="https://www.instagram.com/ghaithbenslimen/" target="_blank" rel="noopener noreferrer" className="channel-link more">
                  VIST INSTAGRAM PAGE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage