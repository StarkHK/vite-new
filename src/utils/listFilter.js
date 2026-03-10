const SEPARATOR = ",";
const OTHER_SEPARATOR = " and ";
const OTHER_LABEL = "other";

export default function listFormater(itemParam, options) {
  let items = itemParam.filter((item) => !!item);

  if (!items && items.length === 0) {
    return "";
  }

  if (items.length === 1) {
    return items[0];
  }

  if (options.sorted) {
    items.sort();
  }

  if (options.unique) {
    items = Array.from(new Set(items));
  }
}
