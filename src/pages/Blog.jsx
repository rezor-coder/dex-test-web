import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/src/server/V1/getBlogs`
      );
      setBlogs(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/src/server/V1/public/getCategories`
      );
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchBlogs();
  }, []);

  return (
    <div className="main">
      <div className="Blog_bg p-3">
        <header>
          <div className="container   custom-container">
            <NavBar />
          </div>
        </header>

        <div className="container custom-container">
          <div className="blog-section position-relative mt-5 mb-5">
            <div className="container">
              <h2 className="font-geist">Blog/Articles</h2>
              <p className="font-geist">
                We write stuff from time to time that might
                <br /> be interesting
              </p>
              <div className="tags-container d-flex flex-wrap">
                {categories.map((category) => (
                  <span className="tag font-geist d-inline-block text-center">
                    {category.Name}
                  </span>
                ))}
              </div>
            </div>

            <div className="explore-container position-absolute bottom-0 end-0 d-flex align-items-center justify-content-end">
              <button className="explore-btn d-none d-md-flex align-items-center justify-content-between rounded-3 font-geist px-lg-4 px-xxl-5 w-100">
                Explore all
                <img
                  src="/assets/images/flash-circle.png"
                  className="img-fluid"
                />
              </button>
              <button className="explore-btn d-block d-md-none rounded-3 px-2">
                <img
                  src="/assets/images/flash-circle.png"
                  className="img-fluid"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row blog_grid_row">
          {blogs.map((blog) => (
            <div className="col-xl-4 col-lg-6 mt-5" key={blog._id}>
              <div className="blog_grid_1 rounded-4">
                <div className="blog_grid_img position-relative">
                  <img
                    // src="assets/images/blog_subtract.png"
                    src={blog.Photo}
                    alt={blog.Name}
                    className="img-fluid rounded-4"
                  />
                  <div className="date-blog position-absolute bottom-0">
                    <p className="mb-1 font-geist ps-sm-4 ps-xl-2 ps-xxl-3 ps-3">
                      {/* {new Date(blog.Date).toDateString()} */}
                      {new Date(blog.Date).toDateString()} | {blog.Tag}
                    </p>
                  </div>
                </div>
                <div className="blog_grid_description p-sm-4 p-3">
                  <h5 className="font-geist mt-4">
                    {/* Everything you need to know about the dynamic world of ... */}
                    {blog.Name}
                  </h5>
                  <div
                    className="font-geist mt-4 fw-normal blog-description"
                    dangerouslySetInnerHTML={{
                      __html:
                        blog.Detail.length > 150
                          ? blog.Detail.substring(0, 150) + "..."
                          : blog.Detail,
                    }}
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  />{" "}
                </div>
                <div className="blog_grid_button p-sm-4 p-3">
                  <button
                    className="d-flex align-items-center justify-content-between rounded-3 font-geist mb-3"
                    type="button"
                    onClick={() => navigate(`/blogdescription?id=${blog.id}`)}
                  >
                    Know More
                    <img
                      src="/assets/images/unique_products/message-question.png"
                      className="img-fluid"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <nav aria-label="Page navigation" className="pt-4">
              <ul className="pagination justify-content-center mt-5 mb-5 gap-4">
                <li className="page-item">
                  <a
                    className="page-link rounded-circle rounded-link d-flex justify-content-center align-items-center font-geist active"
                    href="#"
                  >
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link rounded-circle rounded-link d-flex justify-content-center align-items-center font-geist"
                    href="#"
                  >
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link align-items-center d-flex justify-content-around rounded-pill pill-link font-geist"
                    href="#"
                  >
                    Next{" "}
                    <img
                      src="/assets/images/Blog/play-pause.png"
                      className="img-fluid"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Blog;
