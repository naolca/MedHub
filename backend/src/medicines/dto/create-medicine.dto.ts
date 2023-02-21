export class CreateMedicineDto {
    id:number
    genericName: string;
    brandName: string;
    batchNumber: string;
    quantity: number;
    receivingAddress: string;
    storageConditions: string;
    expiryDate: string;
    pharmacyId: number;
}