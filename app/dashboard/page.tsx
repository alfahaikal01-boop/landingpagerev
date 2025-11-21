import { PromoBanner } from "@/components/promo-banner"
import { CategorySelection } from "@/components/category-selection"
import { TopUpTagihan } from "@/components/top-up-tagihan"
import { ProductCard } from "@/components/product-card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"

const products = [
  {
    title: "Laptop ASUS ROG",
    price: "Rp 15.999.000",
    image: "/asus.jpg",
    rating: 4.6,
    sold: 780
  },
  {
    title: "Headphone Sony WH-1000XM5",
    price: "Rp 4.999.000",
    image: "/sony.jpg",
    rating: 4.8,
    sold: 1450
  },
  {
    title: "Dress Wanita Casual",
    price: "Rp 299.000",
    image: "/dres.jpg",
    rating: 4.4,
    sold: 890
  },
  {
    title: "Kemeja Pria Formal",
    price: "Rp 199.000",
    image: "/kemeja.jpg",
    rating: 4.3,
    sold: 1200
  }
]

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-6 space-y-6">
      <PromoBanner />
      <div className="flex gap-6">
        <div className="flex-1 max-w-3xl">
          <CategorySelection />
        </div>
        <div className="w-96">
          <TopUpTagihan />
        </div>
      </div>
      {/* Categories */}
      <Tabs defaultValue="semua" className="mb-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="semua">Semua</TabsTrigger>
          <TabsTrigger value="elektronik">Elektronik</TabsTrigger>
          <TabsTrigger value="fashion">Fashion</TabsTrigger>
          <TabsTrigger value="rumah">Rumah</TabsTrigger>
          <TabsTrigger value="olahraga">Olahraga</TabsTrigger>
          <TabsTrigger value="kesehatan">Kesehatan</TabsTrigger>
        </TabsList>
        <TabsContent value="semua" className="mt-6">
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="elektronik" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 2).map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
            <ProductCard
              title="Laptop ASUS ROG"
              price="Rp 15.999.000"
              image="/asus.jpg"
              rating={4.6}
              sold={780}
            />
            <ProductCard
              title="Headphone Sony WH-1000XM5"
              price="Rp 4.999.000"
              image="/sony.jpg"
              rating={4.8}
              sold={1450}
            />
          </div>
        </TabsContent>
        <TabsContent value="fashion" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(2, 4).map((product, index) => (
              <ProductCard key={`fashion-${index}`} {...product} />
            ))}
            <ProductCard
              title="Dress Wanita Casual"
              price="Rp 299.000"
              image="/dres.jpg"
              rating={4.4}
              sold={890}
            />
            <ProductCard
              title="Kemeja Pria Formal"
              price="Rp 199.000"
              image="/kemeja.jpg"
              rating={4.3}
              sold={1200}
            />
          </div>
        </TabsContent>
        <TabsContent value="rumah" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              title="Sofa Minimalis"
              price="Rp 3.500.000"
              image="/sofa.jpg"
              rating={4.6}
              sold={450}
            />
            <ProductCard
              title="Meja Makan Kayu"
              price="Rp 2.200.000"
              image="/meja.jpg"
              rating={4.4}
              sold={320}
            />
            <ProductCard
              title="Lampu Tidur LED"
              price="Rp 150.000"
              image="/lampu.jpg"
              rating={4.5}
              sold={680}
            />
            <ProductCard
              title="Karpet Ruang Tamu"
              price="Rp 450.000"
              image="/karpet.jpg"
              rating={4.3}
              sold={520}
            />
          </div>
        </TabsContent>
        <TabsContent value="olahraga" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(3, 4).map((product, index) => (
              <ProductCard key={`sport-${index}`} {...product} />
            ))}
            <ProductCard
              title="Sepeda MTB Polygon"
              price="Rp 5.500.000"
              image="/sepeda.jpg"
              rating={4.7}
              sold={340}
            />
            <ProductCard
              title="Dumbbell 10kg Set"
              price="Rp 750.000"
              image="/abot.jpg"
              rating={4.6}
              sold={890}
            />
          </div>
        </TabsContent>
        <TabsContent value="kesehatan" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              title="Vitamin C 1000mg"
              price="Rp 150.000"
              image="/vitamin.jpg"
              rating={4.7}
              sold={1200}
            />
            <ProductCard
              title="Masker Medis 50pcs"
              price="Rp 75.000"
              image="/masker.jpg"
              rating={4.5}
              sold={2500}
            />
            <ProductCard
              title="Termometer Digital"
              price="Rp 85.000"
              image="/termo.jpg"
              rating={4.4}
              sold={1800}
            />
            <ProductCard
              title="Hand Sanitizer 500ml"
              price="Rp 35.000"
              image="/hand.jpg"
              rating={4.6}
              sold={3200}
            />
          </div>
        </TabsContent>
      </Tabs>
      <Footer />
    </main>
  )
}
