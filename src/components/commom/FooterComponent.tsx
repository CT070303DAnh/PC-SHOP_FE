import React from "react";

const FooterComponent = () => {
  return (
    <>
   

      <footer className="bg-gray-100 text-black py-6 border border-gray-500 p-4 rounded-md">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div>
            <h3 className="font-bold">LIÊN HỆ VỚI CHÚNG TÔI</h3>
            <p>📞 <strong>0354.687.540 - 0399.029.131</strong></p>
            <p>Giờ làm việc: Thứ 2 - Thứ 7 từ <strong>8:00</strong> đến <strong>21:30</strong></p>
            <p>Chủ Nhật từ <strong>8:30</strong> đến <strong>17:30</strong></p>
            <p>---------</p>
            <p>🏠 PC SHOP™</p>
            <p>Gầm Cầu Lủ,Định Công ,Hoàng Mai, Hà Nội</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-500">Facebook</h3>
            <div className="w-16 h-1 bg-blue-500 my-2 mx-auto md:mx-0"></div>
            <div className="mt-4">
              <iframe
                className="w-full max-w-sm h-56 mx-auto md:mx-0"
                src="https://www.facebook.com/ducanh.bui.14473426"
                title="Facebook Page"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="font-bold">YOUTUBE</h3>
            <div className="flex flex-col space-y-4">
              
              <div className="flex items-center bg-white p-4 shadow shadow w-1/2 mx-auto">
                <img src="data:image/png;base64,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" alt="YouTube HOA BAN CAMP" className="w-10 h-10 mr-4" />
                <button className="bg-red-600 text-white px-4 py-2 rounded">YouTube 2subs</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 bg-[#3c7ca6] text-pink-100 font-bold">Copyright 2025 © PC SHOP™</div>
      </footer>
    </>
  );
};

export default FooterComponent;
