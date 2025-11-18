"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Item {
  id: number;
  title: string;
  image: string;
}

export default function CarouselCertificates({
  items,
  onOpen,
}: {
  items: Item[];
  onOpen?: (src: string, title?: string) => void;
}) {
  return (
    <div className="w-full rounded-2xl overflow-hidden backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={12}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        navigation
      >
        {items.map((it) => (
          <SwiperSlide key={it.id}>
            <div
              className="relative h-64 md:h-80 lg:h-96 cursor-pointer group"
              onClick={() => onOpen?.(it.image, it.title)}
            >
              <Image
                src={it.image}
                alt={it.title}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute left-4 bottom-4 bg-black/50 text-white px-3 py-1 rounded shadow">
                {it.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
