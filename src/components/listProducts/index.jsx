import { useState, useEffect } from "react";
import Card from "../card/index";
import { fetchData } from "../../api/index";

const ListItems = () => {
  const [items, setItems] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setItems(data);
    };
    getData();
  }, []);

  const list = () => {
    console.log("items",items)
    return items ?
    items.map((item) => {
      return <Card key={item.id} item={item} />;
    })
    : "Carregando"
  };

  return <>{list()}</>;
};

export default ListItems;
