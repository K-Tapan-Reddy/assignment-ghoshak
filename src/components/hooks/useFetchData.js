import { PRODUCTS_URL } from '../../constants/Urls';
import { useEffect, useState } from 'react';

export const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await (await fetch(PRODUCTS_URL)).json();
      const resCategories = res.products.map(({ category }) => category);
      setCategories([...new Set(resCategories)]);
      setProducts(res.products);
    };
    fetchProducts();
  }, []);

  return [products, categories];
};
