import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div>
  <nav className="flex justify-between items-center bg-[#2A6FA9] px-6 py-4">
    {/* Logo và tiêu đề */}
    <div className="flex items-center gap-4">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/500368107_1833790020732430_8835429006755069748_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vnrWTImtTtIQ7kNvwGE4ief&_nc_oc=AdnSNdkO4sskfbWI_XkWjbpHD-Js6uoFXSOQHKP3DsU5Om81uvPBo15pGzropLfL1tI&_nc_zt=23&_nc_ht=scontent.fhan18-1.fna&_nc_gid=f6H_VJET85dSwA7A2v8khQ&oh=00_AfPT5d-ILT3vxzt_ompCiNR_eN7TNiWDWL_iYY3xeZg1cA&oe=684D01C3" 
          alt="Logo"
          className="w-16 h-16 object-cover rounded"
        />
        <h3 className="text-2xl font-bold text-white whitespace-nowrap">
          SHOPPING CART
        </h3>
      </Link>
    </div>

    {/* Link trợ giúp */}
    <a className="text-white text-sm hover:underline" href="/">
      Bạn cần giúp đỡ?
    </a>
  </nav>
</div>

  );
};
