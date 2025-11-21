"use client"

import React, { useState, useEffect } from "react"
import { Header } from "./header"

export function StickyHeader() {
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-md" : "hidden"}>
      <Header />
    </div>
  )
}
