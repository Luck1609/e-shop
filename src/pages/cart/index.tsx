import { Container, TypographyH5 } from "@/components/custom/misc";
import Title from "@/components/custom/misc/title";

export default function CartPage() {
  return (
    <div>
      <Container>
        <Title
          title="Cart"
          className="flex flex-col items-center"
        />

        <div className="grid lg:grid-cols-4 gap-5">
          <div className="lg:col-span-3"></div>

          <div className="p-3 rounded-lg">
            <TypographyH5>Summary</TypographyH5>
          </div>
        </div>
      </Container>
    </div>
  );
}
