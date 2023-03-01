import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto py-40">
      <div className="flex justify-between w-6/12">
        <Link href="" className="text-[#C2CFD1] font-semibold text-xl">
          Tentang Nonton Kuy
        </Link>
        <Link href="" className="text-[#C2CFD1] font-semibold text-xl">
          Syarat Penggunaan
        </Link>
        <Link href="" className="text-[#C2CFD1] font-semibold text-xl">
          Kebijakan Privasi
        </Link>
        <Link href="" className="text-[#C2CFD1] font-semibold text-xl">
          Tanya Jawab
        </Link>
        <Link href="" className="text-[#C2CFD1] font-semibold text-xl">
          Masukan
        </Link>
      </div>
      <p className="w-6/12 text-[#C2CFD1] text-lg mt-10">
        © 2023 Nonton Kuy dan entitas-entitas terkaitnya. Hak Cipta Dilindungi
        Undang-Undang. © 2023 Entitas-entitas pemberi lisensi Nonton Kuy. Hak
        Cipta Dilindungi Undang-Undang
      </p>
    </footer>
  );
};

export default Footer;
