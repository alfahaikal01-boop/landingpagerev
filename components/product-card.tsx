import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  title: string
  price: string
  image: string
  rating: number
  sold: number
}

export function ProductCard({ title, price, image, rating, sold }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-0">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-xl" />
        <div className="p-4">
          <h3 className="font-semibold text-sm line-clamp-2">{title}</h3>
          <p className="text-lg font-bold text-green-600 mt-1">{price}</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">⭐ {rating}</Badge>
            <span className="text-xs text-muted-foreground">{sold} terjual</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Beli Sekarang</Button>
      </CardFooter>
    </Card>
  )
}
