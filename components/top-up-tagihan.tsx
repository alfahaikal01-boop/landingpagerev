"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function TopUpTagihan() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [nominal, setNominal] = useState("")

  return (
    <div className="bg-white rounded-lg p-6 shadow-md max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Top Up & Tagihan</h2>
        <a href="#" className="text-green-600 font-medium hover:underline">
          Lihat Semua
        </a>
      </div>
      <Tabs defaultValue="pulsa" className="w-full">
        <TabsList className="grid grid-cols-4 border-b border-gray-200">
          <TabsTrigger value="pulsa" className="text-sm font-medium text-gray-700">
            Pulsa
          </TabsTrigger>
          <TabsTrigger value="paket-data" className="text-sm font-medium text-gray-700">
            Paket Data
          </TabsTrigger>
          <TabsTrigger value="listrik-pln" className="text-sm font-medium text-gray-700">
            Listrik PLN
          </TabsTrigger>
          <TabsTrigger value="roaming" className="text-sm font-medium text-gray-700">
            Roaming
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pulsa" className="mt-4">
          <form className="grid grid-cols-2 gap-4 items-end">
            <div>
              <Label htmlFor="phone-pulsa" className="text-sm font-medium text-gray-600">
                Nomor Telepon
              </Label>
              <Input
                id="phone-pulsa"
                type="tel"
                placeholder="089509327150"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="nominal-pulsa" className="text-sm font-medium text-gray-600">
                Nominal
              </Label>
              <Input
                id="nominal-pulsa"
                type="text"
                placeholder="Pilih"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="col-span-2">
              <Button type="submit" className="bg-green-600 hover:bg-green-700 w-full text-white">
                Bayar
              </Button>
            </div>
          </form>
        </TabsContent>

        <TabsContent value="paket-data" className="mt-4">
          <form className="grid grid-cols-2 gap-4 items-end">
            <div>
              <Label htmlFor="phone-paket" className="text-sm font-medium text-gray-600">
                Nomor Telepon
              </Label>
              <Input
                id="phone-paket"
                type="tel"
                placeholder="089509327150"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="nominal-paket" className="text-sm font-medium text-gray-600">
                Nominal
              </Label>
              <Input
                id="nominal-paket"
                type="text"
                placeholder="Pilih"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="col-span-2">
              <Button type="submit" className="bg-green-600 hover:bg-green-700 w-full text-white">
                Bayar
              </Button>
            </div>
          </form>
        </TabsContent>

        <TabsContent value="listrik-pln" className="mt-4">
          <form className="grid grid-cols-2 gap-4 items-end">
            <div>
              <Label htmlFor="id-pln" className="text-sm font-medium text-gray-600">
                ID Pelanggan
              </Label>
              <Input
                id="id-pln"
                type="text"
                placeholder="1234567890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="nominal-pln" className="text-sm font-medium text-gray-600">
                Nominal
              </Label>
              <Input
                id="nominal-pln"
                type="text"
                placeholder="Pilih"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="col-span-2">
              <Button type="submit" className="bg-green-600 hover:bg-green-700 w-full text-white">
                Bayar
              </Button>
            </div>
          </form>
        </TabsContent>

        <TabsContent value="roaming" className="mt-4">
          <form className="grid grid-cols-2 gap-4 items-end">
            <div>
              <Label htmlFor="phone-roaming" className="text-sm font-medium text-gray-600">
                Nomor Telepon
              </Label>
              <Input
                id="phone-roaming"
                type="tel"
                placeholder="089509327150"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="nominal-roaming" className="text-sm font-medium text-gray-600">
                Nominal
              </Label>
              <Input
                id="nominal-roaming"
                type="text"
                placeholder="Pilih"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="col-span-2">
              <Button type="submit" className="bg-green-600 hover:bg-green-700 w-full text-white">
                Bayar
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}
