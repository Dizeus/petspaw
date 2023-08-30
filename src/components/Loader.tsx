import React from "react";
import styles from '@/styles/Loader.module.scss'

const Loader = ({isFetching, children, width, height}: {isFetching: boolean, children: any, width: number, height: number}) => {
  return isFetching ? (
    <div className={styles.loader}>
      <svg
        version="1.1"
        id="L9"
        xmlns="http://www.w3.org/2000/svg"
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
      >
        <path
          fill="#FF868E"
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loader;
