import React from "react";

export default function NewsItem(props) {
  let {title, description, urltoImage, publishedAt, author, source, newsUrl} = props;
  return (
    <>
      <div>
        <div className={`card bg-${props.mode} m-3`} style={{ width: "22rem" }}>
          <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0px" }}>
            <span className="badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden"></span>
            </span>
          </div>
            <img src={urltoImage} className="card-img-top" alt="..." />
            <div className={`card-body`}>
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
            </div>
            <ul className={`list-group list-group-flush bg-${props.mode}`}>
              <li className="list-group-item">{publishedAt}</li>
              <li className="list-group-item">{author === null ? "Unknown" : author}</li>
            </ul>
            <div className="card-body">
              <a
              rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className={`btn btn-sm btn-${props.mode === "light" ? "dark" : "light"
                  }`}
              >
                Know More
              </a>
            </div>
          </div>
        </div>
    </>
  );
}
