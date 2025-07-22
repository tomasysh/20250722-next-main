import Hero from "@/components/Hero";
import PostPreview from "./PostPreview";
import PageContainer from "@/components/PageContainer";

const POST = [
  {
    title: "Man must explore, and this is exploration at its greatest",
    subTitle: "Problems look mighty small from 150 miles up",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Start Bootstrap",
    date: "September 24, 2023",
    id: 0,
  },
  {
    title:
      "I believe every human has a finite number of heartbeats. I don'd not intend to waste any of mine.",
    subTitle: "",
    author: "Start Bootstrap",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "September 18, 2023",
    id: 1,
  },
  {
    title: "Science has not yet mastered prophecy",
    subTitle:
      "We predict too much for the next year and yet far too little for the next ten.",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Start Bootstrap",
    date: "August 24, 2023",
    id: 2,
  },
  {
    title: "Failure is not an option",
    subTitle:
      "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
    author: "Start Bootstrap",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "July 8, 2023",
    id: 3,
  },
];

const PostsPage = () => {
  const posts = [...POST];
  return (
    <>
      <Hero title="Clean Blog" img="home-bg" />
      <PageContainer>
        {posts.map((post, index) => {
          return (
            <>
              <PostPreview post={post} key={post.id} />
              {index !== posts.length - 1 && <hr className="my-4" />}
            </>
          );
        })}
        <div className="d-flex justify-content-end mb-4">
          <a className="btn btn-primary text-uppercase" href="#!">
            Older Posts →
          </a>
        </div>
      </PageContainer>
    </>
  );
};

export default PostsPage;
