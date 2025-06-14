import { Link } from "react-router-dom";
import Header from "../../components/commom/Header/Header";
import FooterComponent from "../../components/commom/FooterComponent";
import Carousel from "../Detail/Carousel";
import { CiHeart } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
const Connect = () => {
    return (
        <div>
            
            <Header></Header>
            <Carousel></Carousel>
            <a className="flex justify-start items-center text-left max-w-[70%] ml-[25vw] p-5 text-black whitespace-pre-line break-words">
          
           
            <p className="flex text-gray-700">
  Xin vui lòng đặt hàng trực tiếp trên website này, hoặc gọi trực tiếp đến hotline 
  <a href="tel:0914268535" className="text-[#c10960] font-bold">-0914.268.535-</a> 
  để được tư vấn & đặt hàng. Chúng tôi giao hàng tận nơi, thanh toán khi nhận hàng!
</p>

</a>
<div className="text-center my-6">
      {/* Đường kẻ & Tiêu đề */}
      <div className="flex items-center justify-center">
        <div className="w-1/4 h-[1px] bg-blue-300"></div>
        <div className="mx-3 text-blue-700 font-bold text-lg flex items-center gap-2">
          <IoPerson className="text-blue-500" />
          TÀI KHOẢN NGÂN HÀNG
        </div>
        <div className="w-1/4 h-[1px] bg-blue-300"></div>
      </div>
    </div>
    <div className="flex items-center justify-center">
       <p>MB 
        |
       </p>
    <p>  8888201048888  |
    </p>
    <p>BUI DUC ANH</p> 
    </div>
<div className="p-4 border border-gray-300 rounded-lg">
  <div className="flex items-center space-x-2">
  
    <span className="font-semibold">Hotline đặt hàng:</span>
    <span className="text-gray-800">0914.268.535 | 0966.031.270</span>
  </div>
  <div className="pl-10 text-gray-700 mt-2">
    Giờ làm việc: Thứ 2 → Thứ 7 từ <strong>8:00</strong> đến <strong>21:30</strong> | Chủ Nhật từ <strong>8:30</strong> đến <strong>17:30</strong>
  </div>
</div>
<div className="p-4 border border-gray-300 rounded-lg">
  <div className="flex items-center space-x-2">
    <i className="sui sui-home text-2xl text-[#004d85]"></i>
    <span className="font-semibold">PC SHOP™</span>
  </div>
  <div className="pl-10 text-gray-700 mt-2">
    Gầm Cầu Lủ,Định Công ,Hoàng Mai, Hà Nộ
  </div>
</div>
<div className="w-full max-w-sm mx-auto">
  <iframe
    className="w-full h-72 border border-gray-300 rounded-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477610.90721996466!2d105.52316613676925!3d20.7372031422104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc508f938fd%3A0x883e474806a2d1f2!2sAcademy%20of%20Cryptography%20Techniques!5e0!3m2!1sen!2s!4v1714673662147!5m2!1sen!2s"
    title="HOA BAN FOOD"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>
<div className="text-center my-6">
      {/* Đường kẻ & Tiêu đề */}
      <div className="flex items-center justify-center">
        <div className="w-1/4 h-[1px] bg-blue-300"></div>
        <div className="mx-3 text-blue-700 font-bold text-lg flex items-center gap-2">
          <CiHeart className="text-blue-500" />
          KẾT NỐI VỚI CHÚNG TÔI TRÊN...
        </div>
        <div className="w-1/4 h-[1px] bg-blue-300"></div>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
  {[
    {
      name: "Hoa Ban Food",
      title: "PC SHOP",
      image: "https://hoabanfood.com/wp-content/uploads/youtube-logo.png",
      link: "https://www.youtube.com/user/HoaBanFood",
    },
    {
      name: "Facebook Page",
      title: "Cập nhật liên tục",
      image: "https://hoabanfood.com/wp-content/uploads/facebook-logo.jpg",
      link: "https://www.facebook.com/hoabanfood",
    },
    {
      name: "TIKTOK",
      title: "Short Videos",
      image: "https://hoabanfood.com/wp-content/uploads/Tiktok-logo.png",
      link: "https://www.tiktok.com/@hoabanfood",
    },
    {
      name: "DA",
      title: "vjppro",
      image: "https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/475801283_1753473662097400_2164260060344927075_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=A_UtuqIParwQ7kNvwETYDT-&_nc_oc=AdlMaEhZjNOhXqx7o4S-LByfa65gVL-4qBMAZHy7RqrSgdnVakVJv8vNA6Pk2RAkr7k&_nc_zt=23&_nc_ht=scontent.fhan18-1.fna&_nc_gid=K_qGlVsKuPdWt6FlTKd1GQ&oh=00_AfNa9eyGCt27WErZKXuRscL_uU7bKh8HeJkttzdPMjngtA&oe=684FA8D7",
      link: "https://www.facebook.com/ducanh.bui.14473426",
    },
  ].map((item, index) => (
    <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-center hover:shadow-lg transition-shadow p-4 rounded-lg"
    >
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="mt-4 font-bold uppercase">{item.name}</h4>
      <p className="text-gray-500 text-sm">{item.title}</p>
    </a>
  ))}
</div>

    

        </div>
    );
}
export default Connect;