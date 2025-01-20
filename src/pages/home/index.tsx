import Subscription from "@/components/custom/misc/subscription";
import ProductCollection from "./collection";
import Featured from "./featured";
import Hero from "./hero";
import Popular from "./popular";
import Testimony from "./testimony";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCollection />
      <Featured />
      <Popular />
      <Testimony />
      <Subscription />
    </>
  );
}
