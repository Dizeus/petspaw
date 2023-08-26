import React from "react";
import styles from '@/styles/Gallery.module.scss'
import { useRouter } from "next/router";
import upload from '@/assets/icons/upload-16.svg'
import Image from "next/image";
export const GalleryNav = () => {
	const router = useRouter();
  return (
    <>
      <button className={styles.gallery__upload} onClick={()=>router.push('/upload')}><Image src={upload} alt="upload"/>Upload</button>
    </>
  );
};
