"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function UserSettings() {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow">
      <Card>
        <CardHeader>
          <CardTitle>Profil Saya</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input id="name" type="text" defaultValue="Nama Pengguna" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="user@example.com" />
          </div>
          <div>
            <Label htmlFor="phone">Nomor Telepon</Label>
            <Input id="phone" type="tel" defaultValue="08123456789" />
          </div>
          <Button className="mt-4">Simpan Perubahan</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pengaturan Akun</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="password">Ubah Kata Sandi</Label>
            <Input id="password" type="password" placeholder="Kata sandi baru" />
          </div>
          <Button className="mt-4">Perbarui Kata Sandi</Button>
        </CardContent>
      </Card>
    </div>
  )
}
