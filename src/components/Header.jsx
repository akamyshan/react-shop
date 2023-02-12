function Header() {
    return (
        <nav className="green darken-3">
            <div className="nav-wrapper">
                <a href="/react-shop" className="brand-logo">
                    React Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="!#">Repo</a>
                    </li>
                    <li>
                        <a href="https://github.com/akamyshan">Github</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
