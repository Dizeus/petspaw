import React, {useState } from "react";
import Loader from "@/components/Loader";
import Router from "next/router";

const withLoading = <P extends object>(Component: React.ComponentType<P>):
// eslint-disable-next-line react/display-name
 React.FC<P> => ({...props} ) =>{
	const [isChanging, setIsChanging] = useState(false);
    Router.events.on("routeChangeStart", () => {
      setIsChanging(true);
    });
    Router.events.on("routeChangeComplete", () => {
      setIsChanging(false);
    })
	return  <Loader isFetching={isChanging} width={250} height={400}>
          <Component {...props as P} />
        </Loader>
}

  export default withLoading;