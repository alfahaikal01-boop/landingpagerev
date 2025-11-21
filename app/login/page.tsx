import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-[#f5f9fc]">
      {/* Left Illustration */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-[#e6f0f6]">
        <img
          src="/logo login.png"
          alt="Login Logo"
          className="max-w-md"
        />
      </div>

      {/* Right Login Form */}
      <div className="flex flex-1 items-center justify-center p-6">
        <LoginForm />
      </div>
    </div>
  )
}
