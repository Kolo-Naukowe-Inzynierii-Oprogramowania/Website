import CommitteeIntroduction from "@/components/content/project-committees/CommitteeIntroduction";
import Image from "next/image";
import React from "react";

export default function WIGPage() {
    return <main>
        <CommitteeIntroduction
            title={
                <>
                    Komsja Projektowa <span className={"color-primary"}>WIG</span>
                </>
            }
            description={"Projekty integrujące wirtualnie społeczność Politechniki Białostockiej."}
            image={
                <Image
                    src={"/image-placeholder-vertical.jpg"}
                    alt={""}
                    className={"mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"}
                    width={100}
                    height={100}
                />
            }
        />
    </main>
}