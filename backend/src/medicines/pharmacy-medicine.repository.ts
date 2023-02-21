import { EntityRepository, Repository } from 'typeorm';
import { PharmacyMedicine } from './entities/pharmacy-medicine.entity';

@EntityRepository(PharmacyMedicine)
export class PharmacyMedicineRepository extends Repository<PharmacyMedicine> {}
