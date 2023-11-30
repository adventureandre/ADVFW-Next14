
"use client"
import { Planet } from "phosphor-react";

export default function Page({ params }: { params: { slug: string[] } }) {
    console.log(params);

    return (
        <div>
            My Post:
            {params.slug.map((slug: string, index: number) => (
                <span key={index}>{slug}</span>
            ))}
            <Planet size={25} />
        </div>
    );
}


