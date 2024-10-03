import CashCard from "./CashCard";
import DebitCard from "./DebitCard";
import TotalBalanceCard from "./TotalBalanceCard";

function BalancesCards() {

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <TotalBalanceCard />
      <DebitCard />
      <CashCard />
    </div>
  );
}
export default BalancesCards;
