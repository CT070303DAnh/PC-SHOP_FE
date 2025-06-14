import { Link } from "react-router-dom";
import Header from "../../components/commom/Header/Header";
import FooterComponent from "../../components/commom/FooterComponent";
const Introduce = () => {
    return (
        <div>
                    <Header></Header>
                    <div className="mx-3v py-9 text-pink-700 font-bold text-3xl flex items-center justify-center gap-2">
                     
                    GIỚI THIỆU
                    </div>
                    <div className="mx-3 text-pink-700 font-bold text-2xl flex items-center justify-center gap-2">
                     
                    THƯ NGỎ
                    </div>
                    <div className="flex justify-start items-center text-left max-w-[50%] ml-[25vw] p-5 text-black whitespace-pre-line break-words">
                    Các bác thân mến! Thành lập và hoạt động từ 2012, 
                    <a className=" text-pink-700 font-bold text-sm gap-2">
                     
                    HOA BAN FOOD™
                     </a> HOA BAN FOOD™ là đại diện tập thể anh chị em chúng tôi, từ các bản làng Tây Bắc xa xôi, cùng khai thác, 
                    chế biến các sản phẩm, đặc sản Tây Bắc chất lượng cao, an toàn & tốt cho sức khỏe để gửi tới tất cả Quý anh chị khách hàng ở khắp mọi miền Tổ Quốc. </div>

                    <div className="w-1/2 mx-auto aspect-video">
                        <iframe
                   className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/-9bU3eH5XnI?enablejsapi=1&amp;autoplay=0&amp;cc_load_policy=0&amp;cc_lang_pref=&amp;iv_load_policy=1&amp;loop=0&amp;modestbranding=0&amp;rel=0&amp;fs=1&amp;playsinline=0&amp;autohide=2&amp;theme=dark&amp;color=red&amp;controls=1&amp;"
                    title="YouTube video player"
                   
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   
                  ></iframe>
                    </div>
                    <div>
                   
                      <a className="flex justify-start items-center text-left max-w-[50%] ml-[25vw] p-5 text-black whitespace-pre-line break-words">
                      <a className=" text-pink-700 font-bold text-sm gap-2">
                     
                     HOA BAN FOOD™
 
                      </a>
                      không đơn thuần chỉ là kinh doanh các sản vật Tây Bắc, mà còn mong muốn gắn kết, giới thiệu văn hóa, ẩm thực và cuộc sống đơn giản của 
                      bà con đồng bào Tây Bắc, cuộc sống đơn giản, nhưng thật, thật giàu tình cảm từ các bản làng xa xôi tới tất cả anh chị em cô chú ở mọi miền Tổ Quốc dành mến thương cho Tây Bắc xa xôi Tây Bắc!
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                            <img src="https://hoabanfood.com/wp-content/uploads/HTX-HBF-Gold-small-800x450.jpg" alt="" />
                      </div>
                   <div>
                   
                   <a className="flex justify-start items-center text-left max-w-[50%] ml-[25vw] p-5 text-black whitespace-pre-line break-words">
                  
                   Chị em phụ nữ nơi những bản làng Tây Bắc, thương con, chiều chồng, mến khách và cực kì chịu khó. Là hậu phương vững, làm tất cả những công việc hoàn thiện sản phẩm mà anh em chúng tôi khai thác được! Từ những giọt mật ong rừng thơm lừng, cho đến những hạt gia vị bé li ti…đã được các chị em, cô, bà làm, dưới sự yêu cầu – giám sát chặt chẽ về quy trình, phương thức khai thác, chế biến. Chính là cam kết đảm bảo nhất để quý khách hàng gần xa đã tin dùng & tín nhiệm trong 7 năm qua.
                   </a>
                 </div>
                 <div className="flex items-center justify-center">
                            <img src="https://hoabanfood.com/wp-content/uploads/who-we-are-3-b.jpg" alt="" />
                      </div>
                      <p className="text-center italic py-6">
                  Trân Trọng
                        </p>
                        <div className="flex items-center justify-center">
                        <span className="text-[#c10960] text-center font-bold italic font-[Verdana,Geneva,sans-serif]">
                        Tập thể HOA BAN FOOD™&nbsp;
                    </span>
                        </div>
                
                    

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
  {[
    {
      name: "Hoa Ban Food",
      title: "Tây Bắc Dấu Yêu",
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
      name: "TÂN",
      title: "TRAVELLER",
      image: "https://hoabanfood.com/wp-content/uploads/tan.jpg",
      link: "https://www.facebook.com/mobigraphy",
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

                    <FooterComponent></FooterComponent>
                  
        </div>

                    
    );
}
export default Introduce ;