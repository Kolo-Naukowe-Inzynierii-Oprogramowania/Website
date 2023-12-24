"use client";

import React from "react";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'

interface PaginationMeta {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

interface PaginationProps {
    pagination: PaginationMeta;
    onPageChange: (page: number) => void;
}

const BlogPagination: React.FC<PaginationProps> = ({ pagination, onPageChange }) => {
    const { page, pageCount } = pagination;
    const maxPages = 4;
    const startPage = Math.max(1, page - Math.floor(maxPages / 2));
    const endPage = Math.min(pageCount, startPage + maxPages - 1);

    return (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-16">
            {page > 1 ? (
                <div className="-mt-px flex w-0 flex-1" onClick={() => onPageChange(page - 1)}>
                    <a
                        href={`/blog/page/${page - 1}`}
                        className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                        <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        Previous
                    </a>
                </div>
            ) : <div className="-mt-px flex w-0 flex-1"></div>}
            {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(p => (
                <a
                    key={p}
                    aria-current={p == page ? 'page' : undefined}
                    href={`/blog/page/${p}`}
                    className=
                        {
                    p == page
                                ? "inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
                                :
                    "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        }
                >
                    {p}
                </a>
            ))}
            {page < pageCount ? (
                <div className="-mt-px flex w-0 flex-1 justify-end" onClick={() => onPageChange(page + 1)}>
                    <a
                        href={`/blog/page/${page + 1}`}
                        className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                        Next
                        <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </a>
                </div>
            ) : <div className="-mt-px flex w-0 flex-1 justify-end"></div>}
        </nav>
    );
};

export default BlogPagination;