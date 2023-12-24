import React from 'react';
import axios from 'axios';
import PaginatedPosts from "@/components/blog/PaginatedPosts";
import NotFoundComponent from "@/components/content/NotFoundComponent";

export default async function Page({
                                       params: { category, page },
                                   }: {
    params: { category: string; page: number; }
}) {
    let posts, thisCategory, categoryData;
    try {
        const res1 = await axios.get(`https://strapi.assts.tech/api/categories?filers[slug][$eq]=${category}`, {
            // public get token
            headers: {
                Authorization: "bearer e46fcfc6fcf6985476227d1024c3afcff3625f1482b959b4855a8d1e1c1efa6d956da82422d12ffb4a9235bbd5470be932358c3f3564da7878a230646115cde8315c2461e91f5d96e4148088c8e90b4aea7aa8e6f7f1d4fca8db3576b2ce93d3c5bd6b7cc5be67a89f6b0a4f56302c3c331026b2892a77e7ca468a71cf36de24",

            }
        });
        categoryData = res1.data;

        const res = await axios.get(`https://strapi.assts.tech/api/blog-posts?populate=*&filters[categories][slug][$containsi]=${category}&pagination[pageSize]=5&pagination[page]=${page || 1}`, {
            headers: {
                // public get token
                Authorization: "bearer e46fcfc6fcf6985476227d1024c3afcff3625f1482b959b4855a8d1e1c1efa6d956da82422d12ffb4a9235bbd5470be932358c3f3564da7878a230646115cde8315c2461e91f5d96e4148088c8e90b4aea7aa8e6f7f1d4fca8db3576b2ce93d3c5bd6b7cc5be67a89f6b0a4f56302c3c331026b2892a77e7ca468a71cf36de24",
            },
        });
        posts = res.data;

        thisCategory = categoryData.data.find((cat: any) => cat.attributes.slug === category);
    } catch {
        return <NotFoundComponent />;
    }

    if(!thisCategory) {
        return <NotFoundComponent />;
    }

    return posts ? (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-32  px:6lg:px-8">
            <div
                className="absolute inset-y-0 left-0 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[72deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                aria-hidden="true"
            />
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <div className="pt-24 sm:pt-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-4xl">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>
                            <h3 className="text-xl mt-2 tracking-tight text-gray-800 sm:text-2xl">
                                Kategoria: {thisCategory.attributes.name}
                            </h3>
                            <p className="mt-2 text-lg leading-8 text-gray-600">
                                {thisCategory.attributes.description}
                            </p>

                            <PaginatedPosts posts={posts} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : <NotFoundComponent />
}