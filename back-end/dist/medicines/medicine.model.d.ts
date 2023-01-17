export interface Medicine {
    id: number;
    genericName: string;
    brandName: string;
    batchNumber: string;
    ammount: number;
    receivingAddress: string;
    storageConditions: string;
    expiryDate: string;
    pharmacyName: string;
    pharmacyLocation: number[];
}
