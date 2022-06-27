import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Blog = (props: any) => {
  return (
    <BlogContainer>
      {props.articles.map((item: any) => (
        <BlogContent key={uuidv4()}>
          <h5>{item.title}</h5>
          <p>{item.body.slice(0, 20) + '...'}</p>
          <Link href={`/blog/${item.id.toString()}`}>
            <a>Read this article</a>
          </Link>
        </BlogContent>
      ))}
    </BlogContainer>
  );
};

export default Blog;

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const articles = await data.json();

  return {
    props: {
      articles,
    },
  };
}

const BlogContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`;

const BlogContent = styled.div`
  background-color: gray;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h5 {
    color: blue;
    text-transform: uppercase;
  }

  p {
    color: yellow;
  }

  a {
    background-color: white;
    padding: 5px;
    margin: 5px 0;
  }
`;
