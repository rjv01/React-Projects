import React from "react";
import Ques from "./Ques";

export default function Faques(){
    return(
        <div className="min-h-screen bgGrid flex justify-center">
            <div className="text-4xl font-mono p-3">
                <h1>Frequently asked questions</h1>
                <Ques />
            </div>
        </div>
    )
}