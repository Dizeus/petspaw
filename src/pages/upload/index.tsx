import MainLayout from "@/layouts/MainLayout";
import styles from "@/styles/Modal.module.scss";
import ContentLayout from "@/layouts/ContentLayout";
import { NextThunkDispatch, wrapper } from "@/store";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useState } from "react";
import { useRouter } from "next/router";
import { api } from "@/api/api";
import succsess from "@/assets/icons/success-20.svg"
import reject from "@/assets/icons/error-20.svg";
import Image from "next/image";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
	const [isDragEnter, setDragEnter] = useState(false)
	const [previewUrl, setPreviewUrl] = useState<string>();
	const [myFile, setMyFile] = useState<File>();
	const [result, setResult] = useState<Number>()
	const uploadFile = async() =>{
		try {
			if(myFile !== undefined){
				let formData = new FormData();
				formData.append("file", myFile);
				const response = await api.uploadFile(formData);
				if(response.data.approved === 1){
					setResult(1)
					setMyFile(undefined);
          			setPreviewUrl(undefined);
				}else{
					setResult(2);
				}
				
			}
		} catch (error) {
			console.log(error);
			setMyFile(undefined);
			setResult(2)
		}
	}


	function dragEnterHandler(event: any) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event: any) {
      event.preventDefault();
      event.stopPropagation();
      setDragEnter(false);
    }

    function dropHandler(event: any) {
      event.preventDefault();
      event.stopPropagation();
      const file = event.dataTransfer.files[0];
		if(file !== undefined){
			setPreviewUrl(URL.createObjectURL(file));
			URL.revokeObjectURL(file)
		}
	  
      setDragEnter(false);
    }



  return (
    <MainLayout activeItem="gallery">
      <div className={styles.bg}></div>
      <div className={styles.modal}>
        <div className={styles.modal__close} onClick={() => router.back()}>
          &#x2715;
        </div>
        <div className={styles.modal__title}>
          Upload a .jpg or .png Cat image
        </div>
        <div className={styles.modal__subtitle}>
          Any uploads must comply with the{" "}
          <a href="https://thecatapi.com/privacy">upload guidelines</a> or face
          deletion.
        </div>
        <div
          onDrop={dropHandler}
          onDragEnter={dragEnterHandler}
          onDragLeave={dragLeaveHandler}
          onDragOver={dragEnterHandler}
          className={result===2?`${styles.modal__dropbox} ${styles.modal__dropbox_error}`: styles.modal__dropbox}
        >
          {previewUrl ? (
            <div className={styles.modal__previewContainer}>
              <img
                className={styles.modal__preview}
                src={previewUrl}
                alt="oops"
              />
            </div>
          ) : !isDragEnter ? (
            <p className={styles.modal__instruction}>
              <span>Drag here</span> your file or <span>Click here</span> to
              upload
            </p>
          ) : (
            <p className={styles.modal__instruction}>
              <span>Drop File</span>
            </p>
          )}
        </div>

        <div className={styles.modal__files}>
          {myFile ? `Image File Name: ${myFile.name}` : "No file selected"}
        </div>
        {myFile && result !== 2 && <button onClick={uploadFile} className={styles.modal__upload}>Upload photo</button>}
		{result && <div className={styles.modal__result}>
			{result === 1 && <><Image src={succsess} alt="succsess"/> <span>Thanks for the Upload - Cat found!</span></>}
			{result === 2 && <><Image src={reject} alt="error"/> <span>No Cat found - try a different one</span></>}
		</div>}
      </div>
    </MainLayout>
  );
};

export default Index;