"use client"

import Image from "next/image"
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="container mx-auto py-10 px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm text-gray-700">
        {/* Kolom 1 */}
        <div>
          <h3 className="font-semibold text-black mb-3">Tokopedia</h3>
          <ul className="space-y-2">
            <li>Tentang Tokopedia</li>
            <li>Hak Kekayaan Intelektual</li>
            <li>Karir</li>
            <li>Blog</li>
            <li>Tokopedia Affiliate Program</li>
            <li>Tokopedia B2B Digital</li>
            <li>Tokopedia Marketing Solutions</li>
            <li>Kalkulator Indeks Masa Tubuh</li>
            <li>Tokopedia Farma</li>
            <li>Promo Hari Ini</li>
            <li>Beli Lokal</li>
            <li>Promo Guncang</li>
          </ul>
        </div>

        {/* Kolom 2 */}
        <div>
          <h3 className="font-semibold text-black mb-3">Beli</h3>
          <ul className="space-y-2">
            <li>Tagihan & Top Up</li>
            <li>Tokopedia COD</li>
            <li>Bebas Ongkir</li>
          </ul>

          <h3 className="font-semibold text-black mt-5 mb-3">Jual</h3>
          <ul className="space-y-2">
            <li>Pusat Edukasi Seller</li>
            <li>Daftar Mall</li>
          </ul>

          <h3 className="font-semibold text-black mt-5 mb-3">Bantuan dan Panduan</h3>
          <ul className="space-y-2">
            <li>Tokopedia Care</li>
            <li>Syarat dan Ketentuan</li>
            <li>Kebijakan Privasi</li>
          </ul>
        </div>

        {/* Kolom 3 */}
        <div>
          <h3 className="font-semibold text-black mb-3">Keamanan & Privasi</h3>
          <div className="space-y-4">
            <Image src="/pci.png" alt="PCI" width={100} height={60} />
            <Image src="/bsi.png" alt="BSI 1" width={100} height={50} />
            <Image src="/bsi.png" alt="BSI 2" width={100} height={50} />
          </div>

          <h3 className="font-semibold text-black mt-6 mb-3">Ikuti Kami</h3>
          <div className="flex gap-3 text-xl text-gray-600">
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
          </div>
        </div>

        {/* Kolom 4 */}
        <div className="lg:col-span-2">
          <h3 className="font-semibold text-black mb-3">
            Nikmatin keuntungan spesial di aplikasi:
          </h3>
          <ul className="space-y-3 mb-4">
            <li>💸 Diskon 70%* hanya di aplikasi</li>
            <li>🎁 Promo khusus aplikasi</li>
            <li>🚚 Gratis Ongkir tiap hari</li>
          </ul>
          <p className="text-gray-600 mb-3">
            Buka aplikasi dengan scan QR atau klik tombol:
          </p>

          <div className="flex items-center gap-4">
            <Image src="/qrcode.png" alt="QR Code" width={120} height={120} />
            <div className="flex flex-col gap-2">
              <Image src="/play.png" alt="Google Play" width={140} height={40} />
              <Image src="/app.png" alt="App Store" width={140} height={40} />
              <Image src="/hua.png" alt="App Gallery" width={140} height={40} />
            </div>
          </div>

          <p className="text-green-600 mt-3">Pelajari Selengkapnya →</p>
        </div>
      </div>
    </footer>
  )
}
