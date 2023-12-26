"use client";

export default function ContentSection({
    post,
    prevPost,
    nextPost,
                                       }: {
    post: any;
    prevPost: any;
    nextPost: any;
}) {
    return (
        <article>
            {
                post.attributes.cover.data && (
                    <img
                        className="aspect-video rounded-xl bg-gray-50 object-cover mb-6"
                        src={"https://strapi.assts.tech" + post.attributes.cover.data.attributes.formats.large.url}
                        width={"100%"}
                    />
                )
            }
            <div className="flex items-center gap-x-4 text-xs mb-6">
                <time dateTime={post.attributes.createdAt} className="text-gray-500">
                    {
                        new Date(post.attributes.createdAt).toLocaleDateString('pl-PL', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })
                    }
                </time>
                {
                    post.attributes.categories.data.map((category: any) => (
                        <a href={`/blog/category/${category.attributes.slug}/page/1`} key={category.id} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                            {category.attributes.name}
                        </a>
                    ))
                }
            </div>
            <div>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                    {
                        post.attributes.title
                    }
                </h1>
            </div>
            {
                post.attributes.isCourse && (
                    <figure className="mt-10 border-l border-indigo-600 pl-9">
                        <blockquote className="text-gray-900">
                            <p className={"font-semibold"}>
                                Ten artykuł to część szkolenia
                            </p>
                            <br/>
                            <p>
                                <a className={"color-primary"} href={`/course/${post.attributes.course.data.attributes.slug}`}>{post.attributes.course.data.attributes.name}</a>
                            </p>
                            <p>
                                {post.attributes.course.data.attributes.description}
                            </p>
                        </blockquote>
                    </figure>
                )
            }
            <div className={"flex justify-center items-center pt-10"}>
                <div className="prose max-w-full" dangerouslySetInnerHTML={{
                        __html: post.attributes.content
                    }}
                />
            </div>
            {
                (prevPost || nextPost) && <hr className={"my-12"} />
            }
            <div className={`flex justify-center items-center ${(prevPost || nextPost) && "mb-12"}`}>
                {
                    post.attributes.isCourse ? (
                        <p className={"text-gray-900"}>
                            Nawigacja dla <a className={"color-primary"} href={`/course/${post.attributes.course.data.attributes.slug}`}>{post.attributes.course.data.attributes.name}</a>:
                        </p>
                    ) : (
                        <p className={"text-gray-900"}>
                            Nawigacja dla artykułów z Bloga KNIO:
                        </p>
                    )
                }
            </div>
            {
                (prevPost || nextPost) && (
                    <div className={"flex justify-between w-full"}>
                        <div className="w-1/2 text-left">
                            {
                                prevPost ? (
                                    <a href={`/blog/post/${prevPost.attributes.slug}`} className="text-sm font-semibold text-gray-900">
                                        <span aria-hidden="true">&larr;</span> {prevPost.attributes.title}
                                    </a>
                                ) : (
                                    <a></a>
                                )
                            }
                        </div>
                        <div className="w-1/2 text-right">
                            {
                                nextPost ? (
                                    <a href={`/blog/post/${nextPost.attributes.slug}`} className="text-sm font-semibold text-gray-900">
                                        {nextPost.attributes.title} <span aria-hidden="true">&rarr;</span>
                                    </a>
                                ) : (
                                    <a></a>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </article>
    )
}
