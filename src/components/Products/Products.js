import { useEffect, useState } from 'react';
import classes from './Products.module.css';
import { Product } from '../Product/Product';
import productClasses from '../Product/Product.module.css';
import { useFetch } from '../hooks/useFetchData';

const Products = () => {
  const [products, categories] = useFetch([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case 'price':
        setAmount(Number(value));
        break;
      case 'category':
        setCategory(value);
        break;
      //  no defaults
    }
  };

  useEffect(() => {
    if (amount > 0 && category) {
      const processedProducts = products.filter(
        (product) => product.category === category && product.price > amount
      );
      setFilteredProducts([...processedProducts]);
    }
  }, [amount, category]);

  return (
    <div className={classes.container}>
      <section className={productClasses.products}>
        <div
          className={`${productClasses.productContent} ${productClasses.container} ${productClasses.containerAll}`}
        >
          <article className={classes.topSection}>
            <header>
              <h1>Products by &gt;</h1>
            </header>
            <div>
              <input
                name='price'
                type='number'
                placeholder='Enter Price'
                onChange={handleChange}
              />
              <select onChange={handleChange} name='category'>
                <option value={-1}>--Select Category--</option>
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
          </article>

          <div className={productClasses.productGrid}>
            {filteredProducts.map((item) => (
              <Product {...item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
