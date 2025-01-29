import { HistoryCard, Transaction } from "@/shared/components";
import EmptyContent from "@/components/custom/misc/empty-content";
import { IconPackageOff } from "@tabler/icons-react";
import { Container } from "@/components/custom/misc";
import { Children } from "@/vite-env";
import TitleBar from "@/shared/components/title-bar";


const history: Transaction[] = [
  {
    reference: "WED328S82",
    amount: 150.00,
    data: "[]",
    paid_at: "2025-01-24 11:32:11",
    tracking_details: {
      cleared_on: "",
      delivered_on: "",
      eta: "2025/02/24 11:32:11",
      shipped_on: ""
    }
  }
]

export default function PurchaseHistory() {

  if (history.length === 0) return (
    <Wrapper>
      <EmptyContent
        message="You haven't made any orders yet"
        icon={IconPackageOff}
      />
    </Wrapper>
  )

  return (
    <Wrapper>
      <div className="mt-10 space-y-10">
        {
          history.map((order, index) => (
            <HistoryCard order={order} key={index.toString()} />
          ))
        }
      </div>
    </Wrapper>
  );
}

const Wrapper = ({ children }: Children) => {
  return (
    <Container>
      <TitleBar
        title="Purchase history"
        description="Here is a list of all the transactions you've made with us."
      />

      {children}
    </Container>
  )
}