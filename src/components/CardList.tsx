import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularProducts = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Lightweight, breathable tee for everyday comfort.",
    description:
      "The Adidas CoreFit T-Shirt is crafted from premium cotton-blend fabric with moisture-wicking technology to keep you dry and comfortable. Perfect for workouts or casual outings, it offers a classic fit with durable stitching for long-lasting wear.",
    price: 899,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription: "Cozy zip-up hoodie for cold-weather comfort.",
    description:
      "Stay warm and stylish with the Puma Ultra Warm Zip. Made with soft fleece lining and a durable outer layer, this hoodie provides excellent insulation without compromising breathability. Its modern design and adjustable hood make it perfect for chilly days.",
    price: 1500,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription: "Classic pullover with premium comfort.",
    description:
      "The Nike Air Essentials Pullover combines soft fleece fabric with a relaxed fit for everyday wear. Featuring ribbed cuffs and hem for a snug feel, this hoodie is designed for both casual outings and active lifestyles.",
    price: 5599,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription: "Performance tee designed to move with you.",
    description:
      "Engineered with Nike Dri-FIT technology, the Dri Flex T-Shirt wicks sweat away and stretches naturally with your movements. Ideal for gym sessions or casual wear, it delivers both style and performance.",
    price: 1299,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/products/4w.png", pink: "/products/4p.png" },
  },
  {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription: "All-weather fleece with water-repellent finish.",
    description:
      "Built for performance in unpredictable weather, the Under Armour StormFleece features lightweight insulation and water-resistant technology. Its sleek design makes it versatile for outdoor adventures or urban wear.",
    price: 7000,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Order Payment",
    badge: "John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Order Payment",
    badge: "Jane Smith",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Order Payment",
    badge: "Michael Johnson",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Order Payment",
    badge: "Lily Adams",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Order Payment",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
];

const CardList = ({ title }: { title: string }) => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>

      <div className="flex flex-col gap-2">
        {title === "Popular Products"
          ? popularProducts.map((item) => (
              <Card
                key={item.id}
                className="flex-row items-center justify-between gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                  <Image
                    src={Object.values(item.images)[0] || ""}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-xs font-medium">
                    {item.name}
                  </CardTitle>
                </CardContent>

                <CardFooter className="p-0 text-sm font-medium flex items-center">
                  {/* Light mode image */}
                  <Image
                    src="/taka.png"
                    alt="BD Taka Icon"
                    width={16}
                    height={16}
                    className="dark:hidden"
                  />

                  {/* Dark mode image */}
                  <Image
                    src="/taka-white.png"
                    alt="BD Taka Icon (white)"
                    width={16}
                    height={16}
                    className="hidden dark:block"
                  />

                  <span>{item.price}</span>
                </CardFooter>
              </Card>
            ))
          : latestTransactions.map((item) => (
              <Card
                key={item.id}
                className="flex-row items-center justify-between gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-xs font-medium">
                    {item.title}
                  </CardTitle>

                  <Badge variant="secondary" className="text-xs font-medium">
                    {item.badge}
                  </Badge>
                </CardContent>

                <CardFooter className="p-0 text-sm font-medium">
                  ${item.count / 1000}K
                </CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default CardList;

/* Object.values(item.images) = The JavaScript method Object.values()
    = takes an object and returns an array of all its values.

    = Object.values(item.images)
        👉 ["/products/1-gray.png", "/products/1-purple.png", "/products/1-green.png"]

    = The [0] simply takes the first element of that array.

    = Object.values(item.images)[0]
        👉 "/products/1-gray.png"
*/
