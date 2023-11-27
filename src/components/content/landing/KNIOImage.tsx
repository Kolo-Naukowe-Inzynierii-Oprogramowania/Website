"use client";
import Image from "next/image";

export default function KNIOImage() {
    return <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
            width={900}
            height={900}
            quality={100}
            src={"/landing/83E3AA15-1DDF-4246-8043-BDDAF4704FB0_1_105_c.jpeg"}
            className={"aspect-[5/2] w-full object-cover xl:rounded-3xl"}
            alt={""}
        />
    </div>;
}