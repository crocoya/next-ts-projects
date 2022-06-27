export default function article(props: any) {
  return (
    <div>
      <h1>{props.article.title}</h1>
      <p>{props.article.body}</p>
    </div>
  );
}

export async function getStaticProps(context: any) {
  const id = context.params.article;
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const article = await data.json();

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const articles = await data.json();

  const paths = articles.map((item: any) => ({
    params: { article: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
