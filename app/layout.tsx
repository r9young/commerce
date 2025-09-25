
import React from "react"


export default function RootLayout ({children}:{children: React.ReactNode}) {
    return (
        <html lang="en">
             <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-green dark:selection:bg-pink-500 dark:selection:text-white">
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}