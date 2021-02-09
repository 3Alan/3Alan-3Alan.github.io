import PostPreview from './post-preview';

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="overflow-hidden">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={
              post.coverImage || 'https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2019/01/762065921.jpg'
            }
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            layout={post.layout}
          />
        ))}
      </div>
    </section>
  );
}
