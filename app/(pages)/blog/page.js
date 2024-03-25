import React from "react";
import Banner from "@/app/components/Banner";
import Blog from "@/app/components/Blog";
import './page.scss';
import blogImage1 from '../../../public/images/recent-blog-image-1.png';
import blogImage2 from '../../../public/images/recent-blog-image-2.png';
import Button from "@/app/components/Button";
import NewsLetter from "@/app/components/NewsLetter";
import ContactCtaBox from "@/app/components/ContactCtaBox";
const RecentBlogContent = [
  {
    image : blogImage1,
    blogBadge: "Stories",
    title : "Performance marketing agencies specialize",
    date : "7 Dec, 2021"
  },
  {
    image : blogImage2,
    blogBadge: "Design",
    title : "Digital marketing channels",
    date : "23 Nov, 2021"
  }
]
const allBlogsContent = [
  {
    image : blogImage1,
    blogBadge: "Stories",
    title : "Performance marketing agencies specialize",
    date : "7 Dec, 2021"
  },
  {
    image : blogImage2,
    blogBadge: "Design",
    title : "Digital marketing channels",
    date : "23 Nov, 2021"
  },
  {
    image : blogImage1,
    blogBadge: "Stories",
    title : "Performance marketing agencies specialize",
    date : "7 Dec, 2021"
  },
  {
    image : blogImage2,
    blogBadge: "Design",
    title : "Digital marketing channels",
    date : "23 Nov, 2021"
  },
  {
    image : blogImage1,
    blogBadge: "Stories",
    title : "Digital marketing channels",
    date : "23 Nov, 2021"
  },
  {
    image : blogImage2,
    blogBadge: "Design",
    title : "Digital marketing channels",
    date : "23 Nov, 2021"
  }
]
const page = () => {
  
  return (
    <main>
      <Banner title='Blog Articles' desciption='Agency provides a full service range including technical skills, design, business understanding.'/>
      <section className="recentBlogSection pt80 ">
        <div className="container">
          <Blog  BlogContent={RecentBlogContent} extraClass="grid2 pb80" />
        </div>
      </section>
      <section className="allBlogsSection pt80">
        <div className="container">
          <div className="allBlogsWrapper pb80">
            <Blog  BlogContent={allBlogsContent} extraClass="grid3" />
            <div className="BtnBox">
              <Button type="button" text="Load More"></Button>
            </div>
          </div>
        </div>
      </section>
      <NewsLetter />
      <ContactCtaBox />
    </main>
  );
};

export default page;
