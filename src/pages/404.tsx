import React from "react";
import styles from "@/styles/404.module.scss";
import { useRouter } from "next/router";
import withLoading from "@/HOC/WithLoading";
const Index = () => {
	const router = useRouter()
  return (
    <div className={styles.message}>
      <p className={styles.message__text}>Oops... 404 page not found</p>
      <button className={styles.message__button} onClick={() => router.push("/")}>Return to homegage</button>
    </div>
  );
};

export default withLoading(Index);
