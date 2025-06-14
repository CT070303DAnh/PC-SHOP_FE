import React, { useEffect, useState } from "react";
import Header from "../../components/commom/Header/Header";
import Categories from "./Categories";
import FooterComponent from "../../components/commom/FooterComponent";
import Product from "../../components/commom/Product";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { addUser } from "../../reducer/user.reducer";
import { getUser } from "../../api/auth";
import { useQuery } from "@tanstack/react-query";
import Carousel1 from "../Detail/Carousel1";
import Carousel2 from "../Detail/Carousel2";
import HighlightSection from "../Detail/HighlightSection";
import Highlight2 from "../Detail/Highlight2";
import Fontbath from "../Detail/Fontbath";
const HomePage = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);

  // Fetching user data using react-query
  const { data } = useQuery({
    queryKey: ["user"], // Provide the query key in an object
    queryFn: getUser, // Provide the function to fetch user data
    enabled: !user,
  });
  // If no user data, add it to Redux store
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (data) {
      dispatch(addUser(data));
    } else {
      // dispatch(checkIsAuthenticated(false)); // If no user data, set isAuthenticated to false in Redux store
      // dispatch(addUser(null)); // Clear user data in Redux store
    }
  }, [data, dispatch]);

  return (
    <div style={{ background: "#f5f5f5" }}>
      <Header />
      <Carousel1></Carousel1>
      <Categories />
      <HighlightSection></HighlightSection>
      
        <div className="lg:px-40 sm:px-30">
        <Product />
        </div>
      
      <Carousel2></Carousel2>
      <Highlight2></Highlight2>
   

      <FooterComponent />
    </div>
  );
};

export default HomePage;
