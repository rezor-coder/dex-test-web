import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";

const NewsDescription = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const blogId = searchParams.get("id");

  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState(null);
  const [recentBlog, setRecentBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      if (!blogId) return;

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/src/server/V1/getNewsById/${blogId}`
        );
        setBlog(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news details:", error);
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  const fetchRelatedBlogs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/src/server/V1/public/getNews/related`
      );
      setRelatedBlog(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching related news details:", error);
      setLoading(false);
    }
  };

  const fetchRecentBlogs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/src/server/V1/public/getNews/recent`
      );
      setRecentBlog(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recent blog details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRelatedBlogs();
    fetchRecentBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>No News Found</p>;
  if (!relatedBlog) return <p>No Related News Found</p>;
  if (!recentBlog) return <p>No Recent News Found</p>;

  return (
    <>
      <div className="blog-wrapper">
        <div className="everything_dynamic pt-lg-3 ps-lg-3 pe-lg-3 pt-0 pt-md-3  pb-0">
          <div className=" px-0 px-md-3">
            <NavBar />
          </div>
          <div className="dynamic_div">
            <div className="container new-container">
              <div className="h2_heading_dynamic">
                <h2 className="primary_font fw-medium">{blog.Name}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="dynamic_images">
          <div className="container new-container">
            <div className="row images_top_new">
              <div className="col-xl-8 col-lg-8">
                <div className="blockchain-img d-flex  flex-column align-items-center justify-content-center position-relative">
                  <img
                    // src="assets/images/blogDescriptions/images-section/blockchain-bg.png"
                    src={blog.Photo}
                    alt={blog.Name}
                    className=" blogDescriptionImg rounded-4 "
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="date-blog position-absolute bottom-0 "
                    style={{ left: "0px" }}
                  >
                    <p className="mb-1 font-geist ps-sm-4 ps-xl-2 ps-xxl-3 ps-3">
                      {/* {new Date(blog.Date).toDateString()} */}
                      {new Date(blog.Date).toDateString()} | {blog.Tag}
                    </p>
                  </div>
                  <div className="bitcoin-rezor-img">
                    <div className="tags-container d-flex flex-wrap">
                      {blog.Tag.map((tag, index) => (
                        <span
                          key={index}
                          className="tag primary_font d-inline-block text-center rounded-pill"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col_paragraph_div">
                  <div
                    className="paragraph_blockchain mt-4 fw-normal blog-description font-geist"
                    dangerouslySetInnerHTML={{
                      __html: blog.Detail,
                    }}
                    style={{}}
                  />{" "}
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="post-bg position-relative">
                  <img
                    src="/assets/images/blogDescriptions/images-section/post-bg.png"
                    alt="post-bg"
                    className="img-fluid"
                  />
                </div>
                <div className="recent-posts mt-5 ">
                  <div className="d-flex align-items-center justify-content-between posts_recent_flex">
                    <h3 className="primary_font fw-medium recent_post_heading">
                      {" "}
                      Recent Posts{" "}
                    </h3>{" "}
                    <img
                      src="/assets/images/blogDescriptions/images-section/star_blog.png"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="posts_div">
                  {recentBlog.map((recentBlogs, index) => (
                    <div
                      className="d-flex mt-4 align-items-center gap-4"
                      key={index}
                    >
                      <img
                        // src="assets/images/blogDescriptions/images-section/posts_div_img.png"
                        src={recentBlogs.Photo}
                        className="posts_div_img rounded-4"
                        style={{ objectFit: "cover" }}
                        width={"20%"}
                        alt="Posts Image"
                      />
                      <h4 className="primary_font posts_div_h4">
                        {recentBlogs.Name}
                      </h4>
                    </div>
                  ))}
                </div>

                <div className="tags-posts mt-5 ">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="primary_font fw-medium tag_post_heading">
                      {" "}
                      Tags{" "}
                    </h3>
                  </div>
                </div>
                <div className="tags_div">
                  <div className="tags-posts-container d-flex flex-wrap mt-4 align-items-center">
                    {blog.Tag.map((tag, index) => (
                      <span
                        key={index}
                        className="tag_posts_div primary_font d-inline-block text-center rounded-pill mt-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="container new-container">
          {/* for mobile and desktop */}
          <div className="related_articles  justify-content-between align-items-center mt-5 pt-lg-5 pt-xl-3">
            <div className="related_post_heading">
              <h3 className="primary_font fw-medium pb-3 pb-sm-0">
                
              </h3>
            </div>
           
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NewsDescription;
