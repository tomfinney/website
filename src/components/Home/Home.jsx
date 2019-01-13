import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../PageWrapper";
import { retrieveResourceContent } from "../../utils/markdown";
import routes from "../../constants/routes";

import "./home.scss";

function Home() {
  const blogs = retrieveResourceContent("blogs");
  return (
    <PageWrapper>
      <div className="home">
        <div>
          <div className="contentTeaserPanel">
            <h2>Blogs</h2>
            <div className="contentTeasers">
              {blogs.map(blog => (
                <div className="contentTeaser">
                  <div>
                    <div className="contentTeaser__img" />
                    <div className="contentTeaser__content">
                      <h3>{blog.meta.title}</h3>
                      <p>{blog.meta.summary}</p>
                      <Link
                        className="btn"
                        to={`${routes.blogs}${blog.meta.handle}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export { Home };
