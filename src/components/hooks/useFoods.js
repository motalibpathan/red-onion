import { useEffect, useState } from "react";

const useFoods = () => {
  const [allFoods, setAllFoods] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/motalibpathan/red-onion/main/public/fakeData.json"
    )
      .then((res) => res.json())
      .then((data) => setAllFoods(data));
  }, []);

  return [allFoods, setAllFoods];
};

export default useFoods;
