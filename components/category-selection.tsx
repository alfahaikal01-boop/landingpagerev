"use client"

import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { title: "Makanan Kering", image: "/makanankering.jpg" },
  { title: "Figure", image: "/figure.jpg" },
  { title: "Tas Selempang Pria", image: "/tas.jpg" },
  { title: "Flat Shoes Wanita", image: "/flat.jpg" },
]

export function CategorySelection() {
  return (
    <div className="bg-white rounded-lg p-6 shadow flex gap-6">
      {categories.map((category, index) => (
        <Card key={index} className="flex flex-col items-center p-4 cursor-pointer hover:shadow-md">
          <CardContent className="p-0">
            <img src={category.image} alt={category.title} className="h-20 w-20 object-contain" />
            <p className="mt-2 text-center text-sm font-medium">{category.title}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
