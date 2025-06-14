import React from "react";
import HeaderTop from "./component/HeaderTop";
import HeaderMid from "./component/HeaderMid";
import HeaderBottom from "./component/HeaderBottom";

const MemoizedHeaderTop = React.memo(HeaderTop);

const MemoizedHeaderMid = React.memo(HeaderMid) ;

const MemoizedHeaderBottom = React.memo(HeaderBottom);

const Header = () => {
  console.log("Memoized Header");
  return (
    <div className="bg-header">
      <MemoizedHeaderTop />
      {/* Search bar */}
      <MemoizedHeaderMid />
      {/* Part 3 */}
      <MemoizedHeaderBottom />
    </div>
  );
};

export default React.memo(Header);
