import { columns, Product } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Product[]> => {
  return [
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
    {
      id: 6,
      name: "Nike Air Max 270",
      shortDescription: "Iconic sneakers with unmatched cushioning.",
      description:
        "The Nike Air Max 270 features the brand's largest Air unit for ultimate comfort and a bold look. Its lightweight mesh upper ensures breathability, while the cushioned sole offers all-day support.",
      price: 6500,
      sizes: ["40", "42", "43", "44"],
      colors: ["gray", "white"],
      images: { gray: "/products/6g.png", white: "/products/6w.png" },
    },
    {
      id: 7,
      name: "Nike Ultraboost Pulse",
      shortDescription: "High-performance running shoes with energy return.",
      description:
        "Designed for speed and comfort, the Nike Ultraboost Pulse provides responsive cushioning and lightweight flexibility. Its modern knit upper adapts to your foot for a personalized fit.",
      price: 1299,
      sizes: ["40", "42", "43"],
      colors: ["gray", "pink"],
      images: { gray: "/products/7g.png", pink: "/products/7p.png" },
    },
    {
      id: 8,
      name: "Levi's Classic Denim",
      shortDescription: "Timeless jeans built for durability and style.",
      description:
        "The Levi's Classic Denim offers a regular fit with a sturdy cotton fabric that ages beautifully with wear. Pair it with your favorite tee or shirt for a versatile look that never goes out of style.",
      price: 1699,
      sizes: ["s", "m", "l"],
      colors: ["blue", "green"],
      images: { blue: "/products/8b.png", green: "/products/8gr.png" },
    },
  ];
};

const ProductsPage = async () => {
  const data = await getData();

  return (
    <div className="">
      <div className="mb-8 p-4 bg-secondary rounded-md">
        <h1 className="font-semibold">All Products</h1>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ProductsPage;
