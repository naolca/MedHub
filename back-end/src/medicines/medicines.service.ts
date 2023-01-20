import { Injectable } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Medicine } from './entities/medicine.entity';

@Injectable()
export class MedicinesService {
  private medicines = [];
  private id = 0;

  /**
   * createMedicine - created a new medicine
   * @param createMedicineDto Contains all information needed to document a new medicine
   * @returns Newly created Medicine object
   */
  createMedicine(createMedicineDto: CreateMedicineDto): Medicine {
    const { genericName, brandName, batchNo, amount, receivingAddress, storageCondition, expiryDate} = createMedicineDto;

    let medicine: Medicine = {
      id: this.id,
      genericName: genericName,
      brandName: brandName,
      batchNo: batchNo,
      amount: amount,
      receivingAddress: receivingAddress,
      storageCondition: storageCondition,
      expiryDate: expiryDate,
    }

    this.id += 1;

    this.medicines.push(medicine);

    return medicine;
  }

  /**
   * getAllMedicines - returns all medicines
   * @returns a collection of Medicine
   */
  getAllMedicines() {
    return this.medicines;
  }

  /**
   * getMedicine - find one medicine.
   * @param id id of the wanted medicine
   * @returns a Medicine or 404 resource not found.
   */
  getMedicine(id: number): Medicine {
    let medicineId = 0;
    
    // Iterate through and find the medicine with the given id
    for (medicineId = 0; medicineId < this.medicines.length; medicineId++) {
      if (medicineId == id)
        break
    }

    return this.medicines[medicineId];
  }

  /**
   * updateMedicine - updated the medicine 
   * @param id id of the medicine to be updated
   * @param updateMedicineDto Contains all information needed to document a medicine
   * @returns Medicne object or 404
   */
  updateMedicine(id: number, updateMedicineDto: UpdateMedicineDto): Medicine {
    const { genericName, brandName, batchNo, amount, receivingAddress, storageCondition, expiryDate} = updateMedicineDto;

    // find the medicine to be updated
    let medicine: Medicine = this.getMedicine(id);

    // Check which parameters are to be updated and update them
    if (genericName)
      medicine.genericName = genericName;
    if (brandName)
      medicine.brandName = brandName;
    if (batchNo)
      medicine.batchNo = batchNo;
    if (amount)
      medicine.amount = amount;
    if (receivingAddress)
      medicine.receivingAddress = receivingAddress;
    if (storageCondition)
      medicine.storageCondition = storageCondition;
    if (expiryDate)
      medicine.expiryDate = expiryDate;
    
    return medicine;
  }

  /**
   * removeMedicine - removes the medicine given by the ID
   * @param id the id to identify the medicine
   * @returns 200 None or 404 not found
   */
  removeMedicine(id: number) {
    let medicineId = 0;
    
    // Iterate through and find the medicine with the given id
    for (medicineId = 0; medicineId < this.medicines.length; medicineId++) {
      if (medicineId == id)
        break
    }

    this.medicines.splice(medicineId + 1, 1);
  }

  /**
   * searches the database for medicines containing the search key
   * @param searchKey string to search the database with
   * @returns a list of medicines
   */
  searchByName(searchKey: string): Medicine[] {
    let medicines: Medicine[] = this.medicines;

    medicines = medicines.filter(medicine => {
      console.log(medicine.brandName, searchKey, medicine.brandName.includes(searchKey));
      medicine.brandName.includes(searchKey) || medicine.genericName.includes(searchKey)
    });

    return medicines;
  }
}
