import { Helmet } from "react-helmet-async";

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="shop our latest products now." />
        <link
          rel="canonical"
          href="https://react-advanced-seo.vercel.app/shop"
        />
        {/* <meta name="robots" content="noindex" /> */}
      </Helmet>

      <div>Shop</div>
    </>
  );
};

export default Shop;
