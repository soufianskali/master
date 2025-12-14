import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Phone, Tablet, Gamepad2, Truck, MessageCircle } from "lucide-react";

export default function MasterPhoneWebsite() {
  const products = [
    {
      category: "phone",
      title: "iPhone 12 Pro Max",
      specs: "128GB • Battery Health 86%",
      note: "Original parts",
      price: "3300 MAD",
      icon: <Phone className="h-8 w-8" />,
    },
    {
      category: "phone",
      title: "iPhone 14 Pro Max",
      specs: "128GB • Battery Health 88%",
      note: "Display changed",
      price: "5200 MAD",
      icon: <Phone className="h-8 w-8" />,
    },
    {
      category: "gaming",
      title: "PS5 Controller",
      specs: "Brand New",
      note: "Original",
      price: "650 MAD",
      icon: <Gamepad2 className="h-8 w-8" />,
    },
    {
      category: "tablet",
      title: "iPad",
      specs: "Brand New",
      note: "Latest model",
      price: "9000 MAD",
      icon: <Tablet className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-black text-white py-6 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-xl">SM</div>
            <div>
              <h1 className="text-2xl font-bold">Soufiane MasterPhone</h1>
              <p className="text-sm opacity-80">Professional Phones & Electronics | هواتف وإلكترونيات باحترافية</p>
            </div>
          </div>
          <a
            href="https://wa.me/212720409364"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-2xl"
          >
            <MessageCircle /> WhatsApp: 0720409364
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-4xl font-extrabold mb-4">
            Best Phones & Electronics in Morocco
            <span className=\"block text-xl mt-2 text-gray-700\">أفضل الهواتف والإلكترونيات في المغرب</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Trusted quality, honest battery health, and competitive prices. Delivery available all over Morocco.
            <br />
            جودة مضمونة، بطارية حقيقية، وأسعار تنافسية. توصيل إلى جميع أنحاء المغرب.
          </p>
          <div className="flex gap-4">
            <Button className="rounded-2xl">Shop Now</Button>
            <Button variant="outline" className="rounded-2xl">Contact Us</Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="h-64 rounded-3xl bg-gradient-to-br from-black to-gray-700 flex items-center justify-center text-white text-3xl font-bold">
            Soufiane MasterPhone
            <br />
            Professional Logo
          </div>
        </motion.div>
      </section>

      {/* Products */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10 text-center">Our Products | منتجاتنا</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }}>
                <Card className="rounded-3xl shadow-md">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-center h-16">{p.icon}</div>
                    <h4 className="text-xl font-bold text-center">{p.title}</h4>
                    <p className="text-sm text-gray-600 text-center">{p.specs}</p>
                    <p className="text-sm text-gray-500 text-center">{p.note}</p>
                    <p className="text-2xl font-extrabold text-center">{p.price}</p>
                    <a
                      href="https://wa.me/212720409364"
                      className="mt-2 inline-flex items-center justify-center gap-2 bg-black text-white py-2 rounded-2xl"
                    >
                      <ShoppingCart size={18} /> Order via WhatsApp
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gray-100 rounded-3xl p-10 text-center">
          <Truck className="mx-auto h-10 w-10 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Delivery All Over Morocco | التوصيل إلى جميع أنحاء المغرب</h3>
          <p className="text-gray-600">Fast & secure shipping to all cities in Morocco. شحن سريع وآمن إلى جميع مدن المغرب.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="font-semibold">Soufiane MasterPhone</p>
        <p className="text-sm opacity-70">WhatsApp: 0720409364</p>
        <p className="text-xs opacity-50 mt-2">© 2025 All rights reserved</p>
      </footer>
    </div>
  );
}
