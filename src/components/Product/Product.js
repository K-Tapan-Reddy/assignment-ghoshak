import classes from './Product.module.css';
import { memo } from 'react';
export const Product = memo(({ id, title, price, category, thumbnail }) => (
  <div className={classes.productItem}>
    <div
      className={classes.productImage}
      style={{ backgroundImage: `url(${thumbnail})` }}
    ></div>
    <div className={classes.productText}>
      <div className={classes.productAuthor}>{category}</div>
      <div className={classes.productTitle}>{title}</div>
      <div className={classes.productDescription}>$ {price}</div>
    </div>
  </div>
));
