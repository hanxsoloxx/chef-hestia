import React from "react";
import ReactMarkdown from 'react-markdown'

export default function Recipe ({ recipe }) {
    return (
        <div className="recipe-card">
            <h2>Here's your recipe:</h2>
            <ReactMarkdown>{recipe}</ReactMarkdown>
        </div>
    )
}