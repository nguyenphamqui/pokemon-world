import Link from "next/link"

const Social = () => {
  return (
    <div className="social-media-links">
      <ul>
        <li><Link href="#" data-text="Youtube" className="text hover">YT</Link></li>
        <li><Link href="#" data-text="Facebook" className="text hover">FB</Link></li>
        <li><Link href="#" data-text="Instagram" className="text hover">IG</Link></li>
      </ul>
    </div>
  )
}

export default Social