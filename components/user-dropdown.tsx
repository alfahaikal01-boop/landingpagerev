"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

export function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  function handleLogout() {
    // Clear authentication state
    localStorage.removeItem("isAuthenticated")
    // Redirect to login page
    router.push("/login")
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          src="/profil.jpg"
          alt="User Avatar"
          className="h-6 w-6 rounded-full"
        />
        <span className="text-gray-700 font-medium">alfa</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4">
          <div className="flex items-center gap-3 mb-4">
          <img
            src="/profil.jpg"
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
          />
            <span className="font-semibold text-lg">alfa</span>
          </div>
          <div className="mb-4 p-3 bg-green-50 rounded-md border border-green-200">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-green-700">Nikmatin Gratis Ongkir tanpa batas!</span>
              <span className="text-green-600 cursor-pointer">Langganan</span>
            </div>
            <p className="text-sm text-gray-600">Min. belanja Rp0, bebas biaya aplikasi~</p>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm text-gray-700">
              <span>GoPay</span>
              <span>Rp0</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span>GoPay Coins</span>
              <span>Top-Up GoPay</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 cursor-pointer">
              <span>Tokopedia Card</span>
              <span className="text-green-600">Daftar Sekarang</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span>Saldo</span>
              <span>Rp46.400</span>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-700 mb-4">
            <span>Tokopedia Seru</span>
            <span className="cursor-pointer text-green-600">Lihat</span>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm text-gray-700">
              <span>Misi Seru</span>
              <span>0</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 cursor-pointer">
              <span>Kupon Saya</span>
              <span className="text-green-600">Cek</span>
            </div>
          </div>
          <div className="space-y-2 border-t border-gray-200 pt-3">
            <div className="cursor-pointer text-sm text-gray-700">Pembelian</div>
            <div className="cursor-pointer text-sm text-gray-700">Wishlist</div>
            <div className="cursor-pointer text-sm text-gray-700">Toko Favorit</div>
            <div className="cursor-pointer text-sm text-gray-700">Pengaturan</div>
            <div
              onClick={handleLogout}
              className="cursor-pointer text-sm text-gray-700 flex items-center gap-1"
            >
              Keluar
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
