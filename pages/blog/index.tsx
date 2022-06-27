import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

const Blog = (props: any) => {
  return (
    <div>
      {props.articles.map((item: any) => (
        <div key={uuidv4()}>
          <div>
            <h5>{item.title}</h5>
            <p>{item.body.slice(0, 20) + '...'}</p>
            <Link href={`/blog/${item.id.toString()}`}>
              <a>Read this article</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
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
