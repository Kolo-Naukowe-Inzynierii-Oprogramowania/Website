export interface CategoryProps {
    id: number;
    attributes: {
        name: string;
        slug: string;
    };
}

export interface PostProps {
    post: {
        id: number;
        attributes: {
            categories: {
                data: CategoryProps[];
            }
            slug: string;
            title: string;
            description: string;
            content: string;
            isCourse: boolean;
            createdAt: string;
            cover: {
                data: {
                    attributes: {
                        formats: {
                            large: {
                                url: string;
                            }
                        }
                    }
                }
            }
        };
    };
}

const Post: React.FC<PostProps> = ({ post }) => (
    <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
            {
                post.attributes.cover.data && <img
                src={"https://strapi.assts.tech" + post.attributes.cover.data.attributes.formats.large.url}
                alt=""
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
            />
            }
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div>
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.attributes.createdAt} className="text-gray-500">
                    {
                        new Date(post.attributes.createdAt).toLocaleDateString('pl-PL', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })
                    }
                </time>
                {post.attributes.categories.data.map((category: any) => (
                    <a
                        key={category.attributes.id}
                        href={`/blog/category/${category.attributes.slug}/page/1`}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                        {category.attributes.name}
                    </a>
                ))
                }
            </div>
            <div className="group relative max-w-xl">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={`/blog/post/${post.attributes.slug}`}>
                        <span className="absolute inset-0" />
                        {post.attributes.title}
                    </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">{post.attributes.description}</p>
            </div>
        </div>
    </article>
);

interface PostListProps {
    posts: any[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
                <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                    {posts.map(post => (
                        <Post key={post.attributes.id} post={post} />
                    ))}
                </div>
);

export {
    Post,
    PostList,
}
