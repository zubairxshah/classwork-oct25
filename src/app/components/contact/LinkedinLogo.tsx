function IconBrandLinkedin({ size = 24, color = "currentColor", stroke = 2, ...props }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 icon icon-tabler icon-tabler-brand-linkedin"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
        <path d="M8 11l0 5" />
        <path d="M8 8l0 .01" />
        <path d="M12 16l0 -5" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
      </svg>
    );
  }
  
  export default IconBrandLinkedin;
  