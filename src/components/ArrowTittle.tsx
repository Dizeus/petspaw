import styles from "@/styles/ArrowTitle.module.scss";
import React from "react";
import Image from "next/image";
import arrowBack from '@/assets/icons/back-20.svg'

interface ArrowTitleItemProps {
  activeItem: string;
}
export const ArrrowTitle: React.FC<ArrowTitleItemProps> = ({activeItem}) => {
  return (
	<>
      <div className={styles.arrow}>
        <Image alt="back" src={arrowBack} />
      </div>
      <div className={styles.title}>{activeItem}</div>
	  </>
  );
}
