import React from "react";

const Input = (props) => {
    const { size, color, placeholder } = props;
    const defaultClass = "flex items-center rounded-md size-fit px-1 py-1 border-2 border-solid";
    const classes = {
        colors: {
            primary: {
                input: "bg-white",
                text: ".placeholder-white",
            },
            secondary: {
                input: "bg-[#B6B4A4]",
                text: "placeholder-white",
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