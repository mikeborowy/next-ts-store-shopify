import { NextPage } from "next";
import { useRouter } from "next/router";

const NotFoundPage: NextPage = () => {
  const router = useRouter();
  console.log("NotFoundPage", JSON.stringify(router.query));

  return <div>Not Found Page</div>;
};

export default NotFoundPage;
