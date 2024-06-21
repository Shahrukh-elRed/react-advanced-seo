import { Helmet } from "react-helmet-async";

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="shop our latest products now." />
        <link rel="canonical" href="http://localhost:3000/shop" />
      </Helmet>

      <div>Shop</div>
    </>
  );
};

export default Shop;
