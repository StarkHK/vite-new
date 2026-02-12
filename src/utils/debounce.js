export default function debounceFunc(func, wait) {
  let timeOutId = null;

  return function (...args) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      timeOutId = null;
      func.apply(this, args);
    }, wait);
  };
}
