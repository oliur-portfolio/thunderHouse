import React from "react";

const Blog = ({ title, imgUrl, imgAlt }) => {
    return (
        <div className="single__project">
            <div className="single__project-image">
                <img src={imgUrl} alt={imgAlt || title} />
            </div>

            <div className="single__project-content">
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default Blog;
