import { useEffect, useState } from "react";

export default function useQuery(func, deps = []) {
  const [state, setState] = useState({
    status: "loading",
  });

  useEffect(() => {
    let ignore = false;

    func().then((data) => {
      if (ignore) return;

      setState({
        status: "success",
        data,
      }).catch((err) => {
        if (ignore) return;

        setState({
          status: "error",
          err,
        });
      });
    });

    return () => {
      ignore = true;
    };
  }, [deps]);

  return state;
}
