import { useState } from "react";
import Link from "next/link";
import Router from "next/router";

import renderCreatedTime from "../utils/renderCreatedTime.js";

export default function ItemsList({
    items: itemsData,
    goToString,
    userSignedIn,
    currUsername,
    showHideOption,
    showRank,
    isMoreLink,
    isMore,
    showPastLink = false,
    showWebLink = false,
    showUnfavoriteOption = false,
    showUnhideOption = false,
    isModerator,
}) {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState(itemsData);

    return (
        <>
            {items
                ? items.map((item, index) => {
                      item.rank = index + 1;
                      return (
                          <div key={item.id} className="listed-item-container">
                              <table>
                                  <tbody>
                                      <tr>
                                          {/* RANK NUM */}
                                          <td className={showRank ? "listed-item-rank" : "listed-item-rank hide"}>
                                              {showRank ? <span>{item.rank}.</span> : null}
                                          </td>

                                          {/* VOTE BTN */}
                                          <td valign="top">
                                              <span className="listed-item-upvote"></span>
                                          </td>

                                          {/* ITEM TITLE, URL | CONTENT */}
                                          <td>
                                              <span className="listed-item-title">
                                                  <Link href={item.url ? item.url : `/item?id=${item.id}`}>
                                                      <a>
                                                          {item.dead ? "[dead] " : null}
                                                          {item.title}
                                                      </a>
                                                  </Link>
                                              </span>
                                              {item.url ? (
                                                  <span className="listed-item-domain">({item.domain})</span>
                                              ) : null}
                                          </td>
                                      </tr>

                                      {/* ITEM DETAILS */}
                                      <tr className="listed-item-bottom-section">
                                          <td colSpan="2"></td>
                                          <td>
                                              {/* CREATED TIME */}
                                              <span className="listed-item-time">
                                                  {renderCreatedTime(item.created)}
                                              </span>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      );
                  })
                : null}
            {/* PAGINATION */}
            {isMore ? (
                <div className={showRank ? "listed-item-more" : "listed-item-more hide-rank"}>
                    <Link href={isMoreLink}>
                        <span>More</span>
                    </Link>
                </div>
            ) : null}
        </>
    );
}
