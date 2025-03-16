export default function SocialNetworks() {
    return (
        <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-brands fa-github fa-2x text-white"
                  style={{ margin: "10px" }}
                ></i>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-brands fa-x-twitter fa-2x text-white"
                  style={{ margin: "10px" }}
                ></i>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-brands fa-instagram fa-2x"
                  style={{ margin: "10px", color: "#E1306C" }}
                ></i>
              </a>
            </div>
    );
}