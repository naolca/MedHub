import { IsNotEmpty,IsString,IsPhoneNumber, IsOptional } 
from  'class-validator';

export class CreateReservationDTO {
    @IsString()
    @IsNotEmpty()
    medicineId: string;
  
    @IsString()
    @IsNotEmpty()
    pharmacyId: string;
  
    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber('ET')  //this indicates the phone number should be in the format of Ethiopia phone number.
    phoneNumber: string;

    
  }
  