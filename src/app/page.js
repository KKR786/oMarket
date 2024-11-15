import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {

  const slides = [
    "https://placehold.co/600x400/red/white",
    "https://placehold.co/600x400/orange/white",
    "https://placehold.co/600x400/black/white",
    "https://placehold.co/600x400/blue/white"
  ];

  

  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
}
