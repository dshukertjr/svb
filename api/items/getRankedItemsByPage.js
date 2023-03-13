import itemsJson from "../db/items.json";

export default async function getRankedItemsByPage(page, req) {
    return itemsJson;
}
