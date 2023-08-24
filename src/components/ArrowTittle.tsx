
import styles from "@/styles/MainLayout.module.scss";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import arrowBack from '@/assets/icons/back-20.svg'

interface ArrowTitleItemProps {
  activeItem: string;
}
export const ArrrowTitle: React.FC<ArrowTitleItemProps> = ({activeItem}) => {
  return (
	<>
      <div className={styles.content__arrow}>
        <Image alt="back" src={arrowBack} />
      </div>
      <div className={styles.content__title}>{activeItem}</div>
	  </>
  );
}
