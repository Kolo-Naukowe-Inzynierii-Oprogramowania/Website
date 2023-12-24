'use client';

import Link from "next/link";

export default function Page() {
    return (
        <main>
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
                <div className="mx-auto max-w-7xl px-6 sm:py-40 lg:px-8">
                    <h1
                        className={
                            'text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-6 pt-14 md:pt-0'
                        }
                    >
                        Szkolenie wstępne
                    </h1>
                    <p>
                        Ogólnokomisyjne szkolenie, które należy zrealizować po wstąpieniu do KNIO.
                    </p>

                    <div className={"mt-12 mb-12"}>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                            Git i GitHub
                        </h2>
                        <ul>
                            <li className={"list-disc ml-6"}>
                                <Link href={"/blog/post/git-i-github-pierwszy-krok-w-zarzadzaniu-kodem-zrodlowym"} className="text-sm font-semibold text-gray-900">
                                    Wprowadzenie do Git i GitHub - Pierwszy Krok w Zarządzaniu Kodem Źródłowym
                                </Link>
                            </li>
                            <li className={"list-disc ml-6"}>
                                <Link href={"/blog/post/integracja-zespolow-na-githubie"} className="text-sm font-semibold text-gray-900">
                                    Integracja Zespołów na GitHub&apos;ie
                                </Link>
                            </li>
                            <li className={"list-disc ml-6"}>
                                <Link href={"/blog/post/gitHub-student-developer-pack-twoje-narzedzie-do-rozwoju"} className="text-sm font-semibold text-gray-900">
                                    GitHub Student Developer Pack – Twoje Narzędzie do Rozwoju
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <p>
                        ...oraz wiele więcej już wkrótce!
                    </p>
                </div>
            </div>
        </main>
    );
}
