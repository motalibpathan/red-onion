import { useEffect, useState } from "react";

const useFoods = () => {
  const [allFoods, setAllFoods] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/food`)
      .then((res) => res.json())
      .then((data) => setAllFoods(data));
  }, []);

  return [allFoods, setAllFoods];
};

export default useFoods;

//"https://raw.githubusercontent.com/motalibpathan/red-onion/main/public/fakeData.json"
