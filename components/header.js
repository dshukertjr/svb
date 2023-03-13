import Link from "next/link";
import Router from "next/router";

import logoutUser from "../api/users/logoutUser";

export default function Header({ userSignedIn, username, karma, goto, pageName, label }) {
    const requestLogout = () => {
        logoutUser(() => {
            Router.push(Router.asPath);
        });
    };

    return (
        <table className="header-wrapper">
            <tbody>
                <tr>
                    <td className="header-logo">
                        <Link href="/">
                            <a>
                                <img src="/android-chrome-512x512.png" />
                            </a>
                        </Link>
                    </td>
                    <td className="header-links">
                        <span className="header-links-items">
                            <b className="header-links-name">
                                <Link href="/">Svb News</Link>
                            </b>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
