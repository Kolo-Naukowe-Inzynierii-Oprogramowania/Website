import React from "react";

export default function Contact() {
    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-32 px:6lg:px-8">
            <div
                className="absolute inset-y-0 left-0 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[69deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                aria-hidden="true"
            />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                Kontakt
                            </h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                Odezwij się do nas, jeśli masz jakieś pytania
                                lub chcesz się z nami skontaktować.
                            </p>
                            <p className="mt-4 leading-7 text-gray-600">
                                W sprawach rekrutacji oraz funkcjonowania KNIO,
                                prosimy o kontakt z Przewodniczącym.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                    Opiekun Naukowy
                                </h3>
                                <p>dr inż. Marcin Koźniewski</p>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">USOSweb</dt>
                                        <dd>
                                            <a
                                                className="font-semibold text-indigo-600"
                                                target={"_blank"}
                                                href="https://usosweb.pb.edu.pl/kontroler.php?_action=katalog2/osoby/pokazOsobe&os_id=10024"
                                            >
                                                USOSweb
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                    Przewodniczący
                                </h3>
                                <p>Marcin Kondrat</p>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                className="font-semibold text-indigo-600"
                                                href="mailto:marcin.kondrat@sspb.pl"
                                            >
                                                marcin.kondrat@sspb.pl
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                    Wiceprzewodnicząca
                                </h3>
                                <p>Jowita Ochrymiuk</p>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                className="font-semibold text-indigo-600"
                                                href="mailto:jowita.ochrymiuk@sspb.pl"
                                            >
                                                jowita.ochrymiuk@sspb.pl
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">
                                    Sekretarz
                                </h3>
                                <p>Karol Karwowski</p>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                className="font-semibold text-indigo-600"
                                                href="mailto:89118@student.pb.edu.pl"
                                            >
                                                89118@student.pb.edu.pl
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
}
