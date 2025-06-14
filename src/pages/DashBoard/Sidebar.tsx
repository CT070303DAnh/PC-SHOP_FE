import { ChartBarStacked, LayoutDashboard, PackageSearch } from "lucide-react";
import { Link } from "react-router-dom";
import HeaderMid from "../../components/commom/Header/component/HeaderMid";
interface Icon {
  children: React.ReactNode;
  title: string;
}
const IconComponent = ({ children, title }: Icon) => {
  return (
    <div className="flex gap-4 text-gray-800 cursor-pointer">
      <div>{children}</div>
      <h3>{title}</h3>
    </div>
  );
};

const Sidebar = () => {
 
  return (
    <div className="w-3/12 flex flex-col gap-10 bg-[#2A6FA9] p-4">
      <div className="flex text-white gap-4 text-2xl items-center">
        <LayoutDashboard />
        <span className="font-bold text-white">Dashboard</span>
      </div>
      <div className="text-2xl font-bold">
                   <Link to={"/"}>
                      <img className="rounded-lg" width="221" height="110" src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/500368107_1833790020732430_8835429006755069748_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vnrWTImtTtIQ7kNvwGE4ief&_nc_oc=AdnSNdkO4sskfbWI_XkWjbpHD-Js6uoFXSOQHKP3DsU5Om81uvPBo15pGzropLfL1tI&_nc_zt=23&_nc_ht=scontent.fhan18-1.fna&_nc_gid=Gn39uqhHd-kIlSHJgAyEcQ&oh=00_AfPKQpso9kTPbbPuI27MoJdjUTrEVKZ8f4U-ILU4VSqq5g&oe=684A5EC3" alt="" />
                   </Link>
            </div>
      <ul className="flex flex-col gap-4">
        <Link to="/dashboard">
          <li>
            <IconComponent title="Categories">
              <ChartBarStacked />
            </IconComponent>
          </li>
        </Link>
        <li>
          <Link to="/dashboard/editProduct">
            {" "}
            <IconComponent title="Products">
              <PackageSearch />
            </IconComponent>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
