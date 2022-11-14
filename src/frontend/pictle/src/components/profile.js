import React from "react";

export default function profile() {
    return (
        <div id="profile">
            {item()}
        </div>
    )
}

function item(data) {
    return(

        // will be using this once the DB for profile object is made. For the rank, we need to organize the db of profile object in order of score and select top 5.
        // Also for different game categories, the way of parsing the score might different(?).
        // <>
        // {
        //     data.map((value, index) => (
        //         <div className="flex">
        //             <div className="item">
        //                 <div className="info">
        //                 <span className="rank">1</span>
        //                 <span>. </span>
        //                 <span className="name">{value.username}</span>
        //                 <span>: </span>
        //                 <span>{value.score}</span>
        //                 </div>
        //             </div>
        //         </div>
        //          )
        //      )
        // }
        // </>

        // leaderboard screening with the hard-coded data.
        <div className="flex">
            <div className="item">
                <div className="info">
                <span className="rank">1</span>
                <span>. </span>
                <span className="name">user_name</span>
                <span>: </span>
                <span>score</span>
                </div>
            </div>
        </div>
    )
}