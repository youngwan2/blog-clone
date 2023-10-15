import Link from "next/link";

export default function Footer() {

    return (
        <header className="flex justify-between items-center bg-gray-300 h-14 text-center p-2.5">
            <Link className="m-1.5" href="/"><h1 className="text-2xl font-semibold">YW Blog</h1></Link>
            <nav className="m-1.5">
                <Link className="m-1.5" href="/">Home</Link>
                <Link className="m-1.5" href="/about">About</Link>
                <Link className="m-1.5" href="/posts">Post</Link>
                <Link className="m-1.5" href="/contact">Contact</Link>
            </nav>
        </header>
    )
}