import HeadMetadata from "../components/headMetadata.js";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import ItemsList from "../components/itemsList.js";

import getRankedItemsByPage from "../api/items/getRankedItemsByPage.js";

import itemsJson from "../api/db/items.json";

export default function Index({ items, authUserData, page, isMore, getDataError, goToString }) {
    // console.log("items: ", itemsJson);
    return (
        <div className="layout-wrapper">
            <HeadMetadata title="SVB News Hub" description="News and Bullshit people having." />
            <Header
                userSignedIn={authUserData.userSignedIn}
                username={authUserData.username}
                karma={authUserData.karma}
                goto={goToString}
            />
            <div className="items-list-content-container">
                {!getDataError ? (
                    <ItemsList
                        items={itemsJson}
                        goToString={goToString}
                        userSignedIn={authUserData.userSignedIn}
                        currUsername={authUserData.username}
                        showHideOption={true}
                        showRank={true}
                        isMoreLink={"/news?page=2"}
                        isMore={isMore}
                        isModerator={authUserData.isModerator}
                    />
                ) : (
                    <div className="items-list-error-msg">
                        <span>An error occurred.</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export async function getServerSideProps({ req, query }) {
    const page = 1;

    const apiResult = await getRankedItemsByPage(page, req);
    return {
        props: {
            items: (apiResult && apiResult.items) || [],
            authUserData: apiResult && apiResult.authUser ? apiResult.authUser : {},
            page: page,
            isMore: false,
            getDataError: false,
            goToString: "",
        },
    };
}
