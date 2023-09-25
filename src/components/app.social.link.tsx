import Link from "next/link"
interface IProps {
  cursorHover: () => void
  cursorNormal: () => void
}
const Social = (props: IProps) => {
  const { cursorHover, cursorNormal } = props
  return (
    <div className="social-media-links">
      <ul>
        <li>
          <Link href="#" data-text="Youtube" className="text hover"
            onMouseOver={cursorHover}
            onMouseLeave={cursorNormal}>
            YT
          </Link>
        </li>
        <li>
          <Link href="#" data-text="Facebook" className="text hover"
            onMouseOver={cursorHover}
            onMouseLeave={cursorNormal}>
            FB
          </Link>
        </li>
        <li>
          <Link href="#" data-text="Instagram" className="text hover"
            onMouseOver={cursorHover}
            onMouseLeave={cursorNormal}>
            IG
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Social