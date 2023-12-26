import axios from "axios";
import ContentSection from "@/components/blog/ContentSection";
import React from "react";
import NotFoundComponent from "@/components/content/NotFoundComponent";
import {next} from "sucrase/dist/types/parser/tokenizer";

export default async function Page({
                                         params: { slug },
                                     }: {
    params: { slug: string }
}) {
    let post, prevPost, nextPost;
    try {
        const res = await axios.get(`https://strapi.assts.tech/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`, {
            headers: {
                // public get token
                Authorization: "bearer e46fcfc6fcf6985476227d1024c3afcff3625f1482b959b4855a8d1e1c1efa6d956da82422d12ffb4a9235bbd5470be932358c3f3564da7878a230646115cde8315c2461e91f5d96e4148088c8e90b4aea7aa8e6f7f1d4fca8db3576b2ce93d3c5bd6b7cc5be67a89f6b0a4f56302c3c331026b2892a77e7ca468a71cf36de24",
            },
        });
        post = res.data.data[0];
    }catch (e: any){
        return <NotFoundComponent />
    }

    if(post.attributes.isCourse) {
        prevPost = post.attributes.course_prev.data;
        nextPost = post.attributes.course_next.data;
    } else {
        try {
            const res = await axios.get(`https://strapi.assts.tech/api/blog-posts?filters[createdAt][$lt]=${post.attributes.createdAt}&sort=createdAt:desc&populate=*&filters[isCourse][$eq]=false`, {
                headers: {
                    // public get token
                    Authorization: "bearer e46fcfc6fcf6985476227d1024c3afcff3625f1482b959b4855a8d1e1c1efa6d956da82422d12ffb4a9235bbd5470be932358c3f3564da7878a230646115cde8315c2461e91f5d96e4148088c8e90b4aea7aa8e6f7f1d4fca8db3576b2ce93d3c5bd6b7cc5be67a89f6b0a4f56302c3c331026b2892a77e7ca468a71cf36de24",
                }
            });
            prevPost = res.data.data[0];
        } catch {
        }

        try {
            const res = await axios.get(`https://strapi.assts.tech/api/blog-posts?filters[createdAt][$gt]=${post.attributes.createdAt}&sort=createdAt:asc&populate=*&filters[isCourse][$eq]=false`, {
                headers: {
                    // public get token
                    Authorization: "bearer e46fcfc6fcf6985476227d1024c3afcff3625f1482b959b4855a8d1e1c1efa6d956da82422d12ffb4a9235bbd5470be932358c3f3564da7878a230646115cde8315c2461e91f5d96e4148088c8e90b4aea7aa8e6f7f1d4fca8db3576b2ce93d3c5bd6b7cc5be67a89f6b0a4f56302c3c331026b2892a77e7ca468a71cf36de24",
                }
            });
            nextPost = res.data.data[0];
        } catch {
        }
    }

    if(post) { return (
        <div className="px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <ContentSection post={post} prevPost={prevPost} nextPost={nextPost} />
            </div>
        </div>
    ) } else {
        return <NotFoundComponent />
    }
}
