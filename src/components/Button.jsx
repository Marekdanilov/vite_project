import React from "react";

const Button = (props) => {
  const { size, color, title } = props;
  const defaultClass = "flex items-center rounded-md size-fit py-1 px-2";
  const classes = {
    colors: {
      primary: {
        button: "bg-[#696860]",
        text: "text-white",
      },
      secondary: {
        button: "bg-[#454545]",
        text: "text-white",
      },
    },
    sizes: {
      small: "text-base",
      medium: "text-xl",
      large: "text-3xl",
    },
  };
  return (
    <div className={defaultClass + " " + classes.sizes[size] + " " + classes.colors[color].button}>
      <div className={classes.colors[color].text}>{title}</div>
    </div>
  )
}

export default Button