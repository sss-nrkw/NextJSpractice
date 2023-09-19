
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <h1>テストのサイト</h1>
            <nav>
            <ul>
                <li>
                <Link href="/">
                    ホーム
                </Link>
                </li>
                <li>
                    <Link href="/about">
                    About
                </Link>
                </li>
                <li>
                <Link href="/contact">
                    お問い合わせ
                </Link>
                </li>
            </ul>
            </nav>
        </header>
    );
};

const Home = () => {
    return (
    <div>
        <Header />
        <h2>ようこそ、ゆうくんのウェブサイトへ！</h2>
        <p>これから素晴らしいコンテンツをお楽しみくださいね。</p>
    </div>
    );
};

export default Header;
