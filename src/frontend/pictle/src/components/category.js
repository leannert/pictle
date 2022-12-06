import { Button } from "@mui/material";
import React from "react";

export default function Category() {

    const handleClick = (e) => {
        console.log(e.target)
    }

    return (
        <div className="categories">
            <h2 className="list">Game Categories</h2>
                <Button onClick={handleClick} cssClass='e-outline'>Game</Button>
                <Button onClick={handleClick} cssClass='e-outline'>Logo</Button>
                <Button onClick={handleClick} cssClass='e-outline'>Movie</Button>
            <div className="item">
                
            </div>
        </div>
    )
}