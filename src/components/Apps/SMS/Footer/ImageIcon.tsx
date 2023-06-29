const ImageIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={25}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M.7.346h24v24H.7z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#268DA0"
        d="M12.7 17.846c1.25 0 2.313-.437 3.188-1.312s1.312-1.938 1.312-3.188c0-1.25-.437-2.313-1.312-3.188-.875-.874-1.938-1.312-3.188-1.312-1.25 0-2.313.438-3.188 1.312-.874.876-1.312 1.938-1.312 3.188 0 1.25.438 2.313 1.312 3.188.875.875 1.938 1.312 3.188 1.312Zm-8 3.5c-.55 0-1.02-.195-1.412-.587a1.927 1.927 0 0 1-.588-1.413v-12c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 4.7 5.346h3.15l1.25-1.35c.184-.216.404-.38.662-.488a2.09 2.09 0 0 1 .813-.162h4.25c.284 0 .555.054.813.162.258.109.479.272.662.488l1.25 1.35h3.15c.55 0 1.021.196 1.413.588.392.392.587.862.587 1.412v12c0 .55-.195 1.021-.587 1.413a1.928 1.928 0 0 1-1.413.587h-16Z"
      />
    </g>
  </svg>
)
export default ImageIcon