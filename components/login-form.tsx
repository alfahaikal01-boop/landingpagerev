"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [email, setEmail] = React.useState("")
  const router = useRouter()

  const isValid = email.trim().length > 0

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!isValid) return
    // Simulate login success
    localStorage.setItem("isAuthenticated", "true")
    router.push("/dashboard")
  }

  return (
    <div className={cn("mx-auto w-full max-w-md bg-white rounded-lg p-8 shadow-md", className)} {...props}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Masuk ke Tokopedia</h1>
        <a href="#" className="text-green-600 font-semibold hover:underline">Daftar</a>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <Input
            type="text"
            placeholder="Nomor HP atau Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border border-gray-300 focus:border-green-600 focus:ring-green-600"
          />
          <p className="text-xs text-gray-500 mt-1">Contoh: 08123456789</p>
        </div>

        <div className="text-right mb-6">
          <a href="#" className="text-green-600 font-semibold hover:underline">Butuh bantuan?</a>
        </div>

        <Button
          type="submit"
          disabled={!isValid}
          className={cn(
            "w-full font-semibold rounded-md py-2 mb-6",
            isValid ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-200 text-gray-400 cursor-not-allowed"
          )}
        >
          Selanjutnya
        </Button>
      </form>

      <div className="flex items-center mb-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-3 text-gray-500 text-sm">atau masuk dengan</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="space-y-3">
        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h.01M15 12h.01M12 15h.01M12 9h.01M12 12h.01M12 12h.01" />
          </svg>
          Scan Kode QR
        </Button>
        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          
          <img src="/logo ggl.png" alt="Logo GGL" className="h-5 w-5" />
          Google
        </Button>
        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          
          <img src="/tiktok.png" alt="Logo TikTok" className="h-5 w-5" />
          Masuk dengan TikTok
        </Button>
      </div>
    </div>
  )
}
