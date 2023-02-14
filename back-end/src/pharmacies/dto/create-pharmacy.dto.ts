import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePharmacyDto {
    @IsString()
    @IsNotEmpty()
    pharmacyName: string;

    @IsNumber()
    @IsNotEmpty()
    pharmaTinNum:number

    @IsNumber()
    @IsNotEmpty()
    branchNum:number

    @IsNumber()
    @IsNotEmpty()
    lat: number;
    
    @IsNumber()
    @IsNotEmpty()
    lng: number;


}
