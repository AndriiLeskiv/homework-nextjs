import Link from "next/link";

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/cars">Cars</Link>
                </li>
                <li>
                    <Link href="/form">Form</Link>
                </li>
            </ul>
        </nav>
    );
};