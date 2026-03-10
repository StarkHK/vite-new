export default function flatArray(value) {
  value.reduce(
    (acc, item) => acc.concat(Array.isArray(item) ? flatArray(item) : item),
    [],
  );
}
