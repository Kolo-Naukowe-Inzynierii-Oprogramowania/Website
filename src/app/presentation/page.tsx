'use client';

export default function Presentation() {
    return (
        <main>
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
                <div className="mx-auto max-w-7xl px-6 sm:py-40 lg:px-8">
                    <h1
                        className={
                            'text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-6 pt-14 md:pt-0'
                        }
                    >
                        Prezentacja Inauguracyjna
                    </h1>
                    <iframe
                        id="autoHeightIframe"
                        src={
                            'https://onedrive.live.com/embed?resid=AF5E1085FD3F05F5%212578&authkey=!AAuLozYQoZ6ed2A&em=2&wdAr=1.7777777777777777'
                        }
                        width={'100%'}
                        height={'600px'}
                        style={{ border: 'none' }}
                    />
                </div>
            </div>
        </main>
    );
}
