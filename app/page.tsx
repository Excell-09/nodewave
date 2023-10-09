"use client";
import Link from "next/link";
import { useState } from "react";

const Chat = ({
  profile,
  message,
  isReverse,
}: {
  profile: string;
  message: string;
  isReverse?: Boolean;
}) => {
  return (
    <div className="flex gap-5">
      <img src={profile} alt="" className={`${isReverse ? "order-2" : ""}`} />
      <div className="bg-[#D9D9D9] p-2 rounded-lg">
        <p className="text-gray-800 text-xs">{message}</p>
      </div>
    </div>
  );
};

const CardBenefit = ({
  logo,
  message,
  title,
  list,
}: {
  logo: string;
  message: string;
  title: string;
  list: String[];
}) => {
  return (
    <article>
      <div className="flex items-center gap-5 mb-5">
        <img src={logo} />
        <h6 className="flex-1 text-xl font-semibold">{title}</h6>
      </div>
      <p className="mb-5">{message}</p>
      <ul className="list-disc list-outside ms-5">
        {list.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </article>
  );
};

const Icon = ({ logo, title }: { logo: string; title: string }) => {
  return (
    <article className="flex items-center flex-col lg:flex-row">
      <img src={logo} alt="" className="w-[40px]"/>
      <h6 className="flex-1 font-semibold text-sm whitespace-nowrap">
        {title}
      </h6>
    </article>
  );
};

const CardProduct = (props: {
  title: string;
  price: number;
  priceDiskon?: number;
  image: string;
}) => {
  return (
    <article className="flex bg-white rounded-xl flex-1">
      <div className="flex-1 pt-8">
        <h6 className="text-3xl text-center text-black font-semibold">
          {props.title}
        </h6>
        <div className="mt-5">
          <h6 className="font-semibold text-xl text-center text-black">
            Start From
          </h6>
          <p className="text-sm text-center text-[#717171]">
            {props.priceDiskon?.toLocaleString("idr")}
          </p>
          <p className="text-sm text-center text-gray-700 font-medium mb-3 lg:mb-12">
            {props.price.toLocaleString("idr")}
          </p>
          <Link
            className="py-2 px-8 bg-green inline-block rounded-full relative left-1/2 -translate-x-1/2"
            href={"/"}>
            Order Now
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <img className="w-full h-full" src={props.image} />
      </div>
    </article>
  );
};

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <header className="py-4 px-2 fixed top-0 left-0 w-full bg-black z-50">
        <nav className="flex items-center justify-between max-w-6xl mx-auto ">
          <img src="/Logo White 1.png" className="w-[226px]" />
          <img
            src="/material-symbols_list.svg"
            className="block lg:hidden"
            onClick={() => setIsNavOpen((value) => !value)}
          />
          <div
            className={`items-center gap-[30px] flex-col lg:flex-row absolute lg:static top-16 left-0 bg-black w-full py-10 ${
              isNavOpen ? "flex" : "hidden"
            } lg:flex lg:py-0 lg:max-w-max`}>
            {["Website", "Mobile Apps", "Portfolio"].map((link, i) => (
              <Link className="text-xl" key={i} href={"/"}>
                {link}
              </Link>
            ))}
            <Link className="rounded-full bg-green py-3 px-5" href={"/"}>
              Make an App
            </Link>
          </div>
        </nav>
      </header>

      <main className="space-y-20">
        <header className=" relative">
          <img
            src="/Rectangle25.png"
            className="absolute top-0 left-0 w-full h-full -z-10"
            alt=""
          />

          <div className="max-w-6xl mx-auto px-3 py-28 lg:py-36">
            <article className="space-y-5 max-w-3xl">
              <h1 className=" text-3xl lg:text-5xl font-semibold">
                Make Your Own Website and Mobile Application With Nodewave
              </h1>
              <Link
                className="bg-green font-semibold p-3 rounded-full inline-block"
                href={"/"}>
                Get Started Now
              </Link>
              <p className="text-sm lg:text-2xl">
                Create Mobile Applications and Websites for Companies or Your
                Business Have a transparent pricing, easy and straightforward
                development process
              </p>
            </article>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-3">
          <h3 className="heading-section text-center mb-10">Our Product</h3>
          <div className="grid lg:grid-cols-3 gap-3 grid-cols-2">
            <article className="bg-white px-5 py-6 lg:px-10 lg:py-12 rounded-lg flex flex-col lg:flex-row gap-5">
              <img src="/ui-design 1.svg" alt="" />
              <div>
                <h6 className="text-black text-2xl font-medium">Mobile Apps</h6>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </article>

            <article className="lg:order-3 px-5 py-6 lg:px-10 lg:py-12 rounded-lg border flex flex-col lg:flex-row gap-5">
              <img src="/web-design (1) 1.svg" alt="" />
              <div>
                <h6 className="text-2xl font-medium">Website</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </article>

            <article className="col-span-2 row-span-2 px-10 py-12 rounded-lg bg-white space-y-10">
              <div className="flex items-center justify-center gap-5">
                <img src="/iPhone 14 Pro Space Black Mockup label.png" alt="" />
                <img src="/iPhone 14 Pro Space Black Mockup label.png" alt="" />
                <img src="/iPhone 14 Pro Space Black Mockup label.png" alt="" />
              </div>
              <div>
                <h6 className="text-black text-3xl font-medium text-center">
                  Mobile Apps
                </h6>
                <p className="text-gray-600 text-center">
                  Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan
                  fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli,
                  Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat
                  dengan fitur GPS.
                </p>
              </div>
              <Link
                className="bg-green rounded-md p-2 inline-block relative left-1/2 -translate-x-1/2"
                href={"/"}>
                Pelajari Selengkapnya
              </Link>
            </article>
          </div>
        </section>

        <section className="max-w-6xl ms-auto px-3">
          <h3 className="text-2xl mb-6 font-semibold">Testimoni</h3>
          <div className="flex overflow-x-auto gap-5 no-scrollbar">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <article
                className="p-4 bg-white min-w-[422px] rounded-lg"
                key={i}>
                <p className="text-gray-600 font-medium text-sm mb-4">
                  Buat aplikasi sama tim ini emang luar biasa dicarikan solusi
                  yang paling murah supaya bisa segera mulai aplikasi PPOB saya.
                  2 minggu udah jadi hasilnya saya tinggal fokus di promosi!
                  Terima kasih Nodewave
                </p>
                <p className="text-green font-medium text-sm">Ahmad Prasetyo</p>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto ps-3">
          <h3 className="heading-section text-center mb-10">Our Work</h3>
          <div className="flex overflow-x-auto no-scrollbar gap-5">
            <article className="relative rounded-lg min-w-[300px] md:min-w-[875px]">
              <img src="/Rectangle13.png" className="absolute top-0 left-0 h-full w-full blur-[5px] -z-10" alt="" />
              <div className="m-5 lg:my-24 lg:mx-5 flex gap-3 flex-col md:flex-row">
                <img src="/Thumnail 4.png" alt="" className="rounded-lg" />
                <div>
                  <h6 className="text-2xl lg:text-[32px] font-semibold text-center">
                    Rayu Motor
                  </h6>
                  <p className="text-lg lg:text-xl">
                    AC Service Workshop that has implemented online registration
                    to make it easier for consumers, mechanics, and sales
                  </p>
                </div>
              </div>
            </article>

            <article className="relative rounded-lg min-w-[300px] md:min-w-[875px]">
              <img src="/Rectangle13.png" className="absolute top-0 left-0 h-full w-full blur-[5px] -z-10" alt="" />
              <div className="m-5 lg:my-24 lg:mx-5 flex gap-3 flex-col md:flex-row  ">
                <img src="/Thumnail 4.png" alt="" className="rounded-lg" />
                <div>
                  <h6 className="text-2xl lg:text-[32px] font-semibold text-center">
                    Rayu Motor
                  </h6>
                  <p className="text-lg lg:text-xl">
                    AC Service Workshop that has implemented online registration
                    to make it easier for consumers, mechanics, and sales
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-[url(/Background.png)] py-5 px-3">
          <h3 className="heading-section text-center mb-10">How We Work</h3>

          <div className="relative max-w-3xl mx-auto flex gap-10 p-7 bg-[url(/Rectangle38.png)] flex-col lg:flex-row">
            <article className="bg-white wfull lg:max-w-[289px] p-5 space-y-3 min-h-[444px] rounded-xl">
              <Chat
                profile="/Ellipse 1.svg"
                message="My name is Danny, I’m looking for profile website company"
              />
              <Chat
                profile="/Ellipse 1 (1).svg"
                message="My name is Danny, I’m looking for profile website company"
                isReverse={true}
              />{" "}
              <Chat
                profile="/Ellipse 1.svg"
                message="My name is Danny, I’m looking for profile website company"
                isReverse={true}
              />{" "}
              <Chat
                profile="/Ellipse 1 (1).svg"
                message="My name is Danny, I’m looking for profile website company"
              />
            </article>

            <article className="flex-1 mt-3">
              <h6 className="text-xl font-semibold mb-[13px]">Estimate</h6>
              <p className="text-xl">
                Estimate the cost of creating your application with us. Pricing
                is transparent at the start with a gradual payment method.
              </p>
            </article>
          </div>
        </section>

        <section className="py-5">
          <h3 className="heading-section text-center mb-12">
            Applications that can be made
          </h3>

          <div className="flex max-w-6xl mx-auto gap-5 flex-col lg:flex-row px-3">
            <CardBenefit
              logo="./material-symbols_list.svg"
              title="Online Attendance"
              list={[
                "Clock in and Clock Out attendance",
                "Face Photo",
                "Face Recognition",
                "Accurate time stamp down to seconds",
                "GPS location of employees",
              ]}
              message="With the times, your team may be able to work in the office or outside the office. Get the accuracy of your team's work hours with your own company's special online attendance feature with features such as:"
            />
            <CardBenefit
              logo="./fluent-emoji-high-contrast_man-mechanic.svg"
              title="Sport Center"
              list={[
                "Choose a booking schedule",
                "Online payments",
                "Automatic scheduling system",
                "Search for Friends feature",
                "Split Payment with team members",
                "Information and announcements from you",
              ]}
              message="Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to"
            />{" "}
            <CardBenefit
              logo="./ph_book-bold.svg"
              title="Booking"
              list={[
                "Memilih jenis dan kategori jasa yang dikehendaki",
                "Melakukan reservasi online dan pembayaran dengan metode pembayaran digital",
                "Penjadwalan dengan tim lapangan",
                "Aplikasi khusus untuk tim",
                "Promosi dan Kode voucher khusus",
              ]}
              message="Offer your services in your own application to place orders to delivery directly to the client's house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:"
            />
          </div>

          <div className="flex items-center max-w-6xl mx-auto gap-5 mt-16 overflow-x-auto no-scrollbar py-5 ps-3">
            <Icon logo="./ant-design_shop-outlined.svg" title="E-commerce" />
            <Icon logo="./mdi_company.svg" title="Company Profile" />
            <Icon
              logo="./streamline_money-cashier-shop-shopping-pay-payment-cashier-store-cash-register-machine.svg"
              title="Cashier"
            />
            <Icon logo="./ph_chat-bold.svg" title="Chat" />
            <Icon
              logo="./fluent-emoji-high-contrast_man-mechanic.svg"
              title="Workshop"
            />
            <Icon
              logo="./healthicons_construction-outline.svg"
              title="Construction"
            />
            <article className="flex-1">
              <h6 className="font-semibold text-sm whitespace-nowrap">And many others</h6>
            </article>
          </div>
        </section>

        <section className="py-5">
          <h3 className="heading-section text-center mb-12">
            Start Creating Websites or Mobile Apps For You Now
          </h3>

          <div className="flex gap-5 md:gap-[100px] max-w-5xl mx-auto px-3 flex-col md:flex-row">
            <CardProduct
              image="./Rectangle 24(1).png"
              price={500_000}
              priceDiskon={1_000_000}
              title="Website"
            />
            <CardProduct
              image="./Rectangle 24.png"
              price={999_000}
              title="Mobile Apps"
            />
          </div>
        </section>
      </main>

      <footer className="grid my-20">
        <div className="m-auto text-center space-y-8 max-w-[329px]">
          <img
            src="/Logo White 1.png"
            className="relative left-1/2 -translate-x-1/2"
          />
          <h6>PT NODEWAVE SOLUSI TEKNOLOGI</h6>
          <div>
            <p> Graha Pena Surabaya Jl. Ahmad Yani no. 88 Surabaya </p>
            <p> Phone : +62811258280 </p>
            <p> Email : support@nodewave.id</p>
          </div>

          <div className="max-w-[80%] mx-auto flex gap-5 justify-between">
            <img src="/ic_baseline-facebook.svg" alt="" />
            <img src="/mdi_twitter.svg" alt="" />
            <img src="/mdi_youtube.svg" alt="" />
            <img src="/mdi_linkedin.svg" alt="" />
            <img src="/ri_instagram-fill.svg" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
