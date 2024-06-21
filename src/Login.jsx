import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="login to view your account." />
        <link
          rel="canonical"
          href="https://react-advanced-seo.vercel.app/login"
        />
      </Helmet>
      <div>Login</div>
    </>
  );
};

export default Login;
