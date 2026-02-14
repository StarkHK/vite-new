export default function curryFunction(func) {
  return function curring(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return (arg) => {
      args === undefined
        ? func.apply(this, args)
        : func.apply(this, [...args, arg]);
    };
  };
}
