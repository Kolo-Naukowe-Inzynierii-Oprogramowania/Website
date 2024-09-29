import React from 'react';

export default async function Page() {

    return (
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
                                Strona w trakcie przebudowy...
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}