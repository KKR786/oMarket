import Carousel from "@/components/Carousel";
import Featured from "@/components/Featured";
import OnSale from "@/components/OnSale";
import TopSales from "@/components/TopSales";
import Image from "next/image";
import { getBanner } from "@/queries";

export default async function Home() {

  const slides = await getBanner();


  return (
    <div>
      <Carousel slides={slides} />
      <Featured />
      <TopSales />
      <OnSale />
    </div>
  );
}
