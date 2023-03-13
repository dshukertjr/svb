import itemsJson from "../db/items.json";

export default async function getRankedItemsByPage(page, req) {
    console.log("itemsJson: ", itemsJson);
    return itemsJson;
}
