export interface ITransaction {
    transactionType: 'down' | 'up';
    name: string;
    amount: string;
    isCategory: string;
    date: string;
    id: string;
}