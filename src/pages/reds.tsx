import React from "react";
import { useRouter } from "next/router";
const WinePage = () => {
  const router = useRouter();

  const { id } = router.query;

  return <div>{id} 니가 왜 여기서나와 </div>;
};

export default WinePage;