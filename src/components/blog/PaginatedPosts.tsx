"use client";

import {PostList} from "@/components/blog/PostsList";
import BlogPagination from "@/components/blog/BlogPagination";
import {useState} from "react";

interface PostData {
    id: number;
    attributes: {
        title: string;
        content: string;
    };
}

interface PostResponse {
    data: PostData[];
    meta: {
        pagination: {
            page: number;
            pageCount: number;
        }
    }
}

const PaginatedPosts: React.FC<{
    posts: PostResponse;
}>    = ({
    posts,
}) => {
    const pageSize = posts.meta.pagination.pageCount;
    const [currentPage, setCurrentPage] = useState<number>(posts.meta.pagination.page);

    return (
        <div>
            <PostList posts={posts.data} />
            <BlogPagination
                pagination={{
                    page: currentPage,
                    pageSize: pageSize,
                    pageCount: posts.meta.pagination.pageCount,
                    total: posts.meta.pagination.pageCount * pageSize,
                }}
                onPageChange={page => {
                    window.location.href = `/blog/page/${page}`
                }}
            />
        </div>
    );
};

export default PaginatedPosts;