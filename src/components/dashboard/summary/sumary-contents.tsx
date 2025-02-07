import { OutComeSummary } from "./outcome-summary";
import { TotalSummary } from "./total-summary";
import { IncomeSummary } from "./income-summary";

export function SumaryContents() {
    return (
        <div className="w-full flex gap-3">
            <IncomeSummary/>
            <OutComeSummary/>
            <TotalSummary/>

        </div>
    )
}