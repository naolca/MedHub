import { IsNotEmpty,IsString,IsPhoneNumber, IsOptional } 
from  'class-validator';

export class CreateReservationDTO {
    @IsNotEmpty()
    medicineId: number;
    
    @IsNotEmpty()
    pharmacyId: number;
  
    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber('ET')  //this indicates the phone number should be in the format of Ethiopia phone number.
    phoneNumber: string;    
  }
  