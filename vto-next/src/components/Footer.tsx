export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="subscribe">
            <h3>Subscribe to our news</h3>
            <div className="subscribe-box">
              <input type="email" placeholder="Your email" />
              <button>&rarr;</button>
            </div>
          </div>
          <div className="help">
            <h3>Do you need help?</h3>
            <p>Call us 1-877-997-7232</p>
            <p>Chat with our Client Service</p>
            <p>Contacts</p>
            <p>FAQ</p>
            <p>Sitemap</p>
          </div>
        </div>
      </footer>
    );
  }
  