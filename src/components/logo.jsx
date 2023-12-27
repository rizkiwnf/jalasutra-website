import React from "react";

function Logo(props) {
    return (
        <div className={props.width}>
            <img src={props.gambarLogo} alt="" />
        </div>
    )
}
export default Logo;