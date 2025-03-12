import React from "react";

const Input = (props) => {
    const { size, color, placeholder } = props;
    const defaultClass = "flex items-center rounded-md size-fit px-1 py-1 border-1";
    const classes = {
        colors: {
            primary: {
                input: "bg-white text-green-700 text-sm",
            },
            secondary: {
                input: "bg-[#B6B4A4] text-red-400 text-3xl",
            },
        },
        sizes: {
            small: "text_base",
            medium: "text_xl w-100",
            large: "text_3xl w-150",
        }
    }
    return (
        <input type="text"
            className={defaultClass + " " + classes.sizes[size] + " " + classes.colors[color].input}
            placeholder={placeholder} 
        >  
        </input>
    )
}

export default Input