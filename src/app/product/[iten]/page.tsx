"use client"
import {Planet} from "phosphor-react";

export default function Page({ params }: { params: { iten: string } }) {
    console.log(params)
    return <div>My Post: {params.iten}<Planet size={25}/></div>
}
