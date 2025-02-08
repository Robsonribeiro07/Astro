import { useCallback } from "react";
import { useGetDataUser } from "./use-get-data-user";
import { ConvertNumberEmReal } from "@/functions/convert-number-em-real";

interface ResultRevenue {
    totalIncome: number;
    totalOutcome: number;
    totalRevenue: number;
}

export function UseGetRevenue() {
    const { userData } = useGetDataUser();


    const getRevenue = useCallback(() => {
        const result = userData && userData.transactions.length > 0 && userData.transactions.reduce<ResultRevenue>((acc, transaction) => {
            if (transaction.TypeTransactions === 'Income') {
                acc.totalIncome += transaction.Amount; 
            } else if (transaction.TypeTransactions === 'Outcome') {
                acc.totalOutcome += transaction.Amount; 
            }

            acc.totalRevenue = acc.totalIncome - acc.totalOutcome;

            return acc;
        }, {
            totalIncome: 0,
            totalOutcome: 0,
            totalRevenue: 0
        });

        return result;
    }, [userData]);

    

    
    const result = getRevenue();

    return {
        totalIncome: ConvertNumberEmReal(result ? result.totalIncome : 0),
        totalOutcome: ConvertNumberEmReal(result ? result.totalOutcome : 0),
        totalRevenue: ConvertNumberEmReal(result ? result.totalRevenue : 0)
    };
}
