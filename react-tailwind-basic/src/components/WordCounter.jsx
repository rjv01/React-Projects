import React, { useState } from "react";

export default function CharCounter() {

    const [text, setText] = useState("");
    const [charCount, setCharCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);

    const handleTextArea = (e) => {
        const newText = e.target.value;
        setText(newText);
        CountWord(newText);
        CountSen(newText);
    };

    const checkBeforeChar = (validChar) => {
        return ((validChar >= "A" && validChar <= "Z") || (validChar >= "a" && validChar <= "z"));
    };

    const handleDeleteText = () => {
        setText("");
        setSentenceCount(0);
        setCharCount(0);
    };

    const CountWord = (newText) => {
        let count = 0;
        for (let i = 0; i < newText.length; i++) {
            if (checkBeforeChar(newText[i]))
                count++;
        }
        setCharCount(count);
    };

    const CountSen = (newText) => {
        let count = 0;
        if (newText.length > 1) {
            for (let i = 1; i < newText.length; i++) {
                if (checkBeforeChar(newText[i - 1]) && (newText[i] === '.' || newText[i] === '!' || newText[i] === '?'))
                    count++;
            }
        }
        setSentenceCount(count);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex justify-center items-center px-4 py-10">
            <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-6xl w-full flex flex-col md:flex-row gap-6">
                {/* Text Area Section */}
                <div className="flex-1 flex flex-col">
                    <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">Character & Sentence Counter</h1>
                    <textarea
                        placeholder="Type your text here..."
                        onChange={handleTextArea}
                        value={text}
                        autoFocus
                        className="flex-grow resize border border-gray-400 rounded-xl p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        className="mt-6 bg-red-600 text-white py-2 px-6 rounded-xl text-lg font-semibold hover:bg-red-700 hover:shadow-xl transition duration-200 self-center"
                        onClick={handleDeleteText}
                    >
                        Clear Text
                    </button>
                </div>

                {/* Stats Section */}
                <div className="flex-1 bg-blue-50 rounded-2xl shadow-inner p-6 flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Statistics</h2>
                    <div className="text-xl mb-2">
                        <span className="font-medium text-blue-800">Total Characters(A-Z,a-z):</span> {charCount}
                    </div>
                    <div className="text-xl">
                        <span className="font-medium text-blue-800">Total Sentences:</span> {sentenceCount}
                    </div>
                </div>
            </div>
        </div>
    );
}
