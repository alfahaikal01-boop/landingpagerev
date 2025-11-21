"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UserDropdown } from "./user-dropdown"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-1 text-sm bg-gray-100 border-b border-gray-200">
        <div className="flex items-center space-x-2 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8a9 9 0 110-18 9 9 0 010 18z" />
          </svg>
          <span>
            <strong>Gratis Ongkir + Banyak Promo</strong> belanja di aplikasi
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div className="flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-gray-800">Tentang Tokopedia</a>
          <a href="#" className="hover:text-gray-800">Pusat Edukasi Seller</a>
          <a href="#" className="hover:text-gray-800">Promo</a>
          <a href="#" className="hover:text-gray-800">Tokopedia Care</a>
        </div>
      </div>

      {/* Bottom bar */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-4">
          <img src="/logo pojok.png" alt="Logo" className="h-8 w-auto" />
          <div className="hidden md:flex items-center space-x-2">
            <span className="font-semibold">Kategori</span>
            <Input
              type="text"
              placeholder="Cari di Tokopedia"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-96"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button aria-label="Cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              <circle cx="7" cy="21" r="1" />
              <circle cx="17" cy="21" r="1" />
            </svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">3</span>
          </button>
          <button aria-label="Notifications" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">5</span>
          </button>
          <button aria-label="Messages" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">2</span>
          </button>
          <button aria-label="Store" className="flex items-center space-x-1 cursor-pointer text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
            </svg>
            <span className="font-medium">Toko</span>
          </button>
          <UserDropdown />
        </div>
      </header>
    </>
  )
}
