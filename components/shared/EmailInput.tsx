'use client'
import React, { useState, useEffect, Suspense } from 'react'

function EmailInput(props: React.HtmlHTMLAttributes<HTMLInputElement>) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            {isClient &&
                <Suspense fallback={<input/>}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-2 w-full rounded-md border p-3"
                        placeholder="Enter your email"
                        suppressHydrationWarning={true}

                    />
                </Suspense>
            }


        </>

    )
}

export default EmailInput