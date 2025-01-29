import { Container } from "@/components/custom/misc";
import TrackingForm from "./form";


export default function Tracking() {

  return (
    <Container className="w-full  mt-10 lg:mt-0">
      <div className="lg:h-[80vh] flex justify-center items-center">
        <TrackingForm />
      </div>
    </Container>
  );
}
