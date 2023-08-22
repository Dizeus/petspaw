import styles from "@/styles/Home.module.scss";
import React from "react";
import girlImage from "../assets/images/girl-and-pet.png"
import Image from "next/image";


export const Home = () =>{
  return (
       	<div className={styles.home}>
			<Image className={styles.home__img} layout={'fixed'} alt='girl and a pet image' src={girlImage}/>
		</div>)
}