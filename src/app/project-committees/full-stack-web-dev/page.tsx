import CommitteeIntroduction from '@/components/content/project-committees/CommitteeIntroduction';
import Image from 'next/image';
import React from 'react';

export default function FullStackWebDevPage() {
    return (
        <main>
            <CommitteeIntroduction
                title={
                    <>
                        Komsja Projektowa ds.{' '}
                        <span className={'color-primary'}>
                            Full-Stack Web Development&apos;u
                        </span>
                    </>
                }
                description={
                    'Skupienie na tworzeniu zaawansowanych projektów internetowych, łączących front-end i back-end, przy użyciu nowoczesnych technologii i narzędzi.'
                }
                image={
                    <Image
                        src={'/committee/webdev.png'}
                        alt={''}
                        className={
                            'mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'
                        }
                        width={900}
                        height={900}
                    />
                }
            />
        </main>
    );
}
