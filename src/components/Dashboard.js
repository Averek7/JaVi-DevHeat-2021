import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Items from "./Items";

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -100,
  },
};

const Dashboard = (props) => {
  const [articles, setArticles] = useState([]);

  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + word.slice(1, lower.length);
  };

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setArticles(result.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  });


  <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla
    voluptatibus aperiam rem est rerum aspernatur? Sapiente voluptates sequi
    quibusdam, natus molestiae molestias voluptatem eligendi ex ut, velit eaque,
    atque tenetur ipsa vero voluptatum?
  </motion.div>;

  return (
    <>
        <h2 className="text-center" style={{ margin: "15px 35px 0px 10px" }}>
          {capitalize(props.category)} Top-headlines
        </h2>
        <div className="container">
          <div className="row">
            {articles?.map((elem) => (
              <div className="col-md-4" key={elem.url}>
                <Items
                  title={
                    elem.title?.length > 0
                      ? elem.title.slice(0, 50)
                      : elem.title
                  }
                  description={
                    elem.description?.length > 0
                      ? elem.description.slice(0, 70)
                      : elem.description
                  }
                  author={elem.author === null ? "Unknown" : elem.author}
                  urltoImage={elem.urlToImage}
                  publishedAt={elem.publishedAt}
                  source={elem.source.name}
                  newsUrl={elem.url}
                  mode={props.mode}
                  toggleMode={props.toggleMode}
                />
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Dashboard;
