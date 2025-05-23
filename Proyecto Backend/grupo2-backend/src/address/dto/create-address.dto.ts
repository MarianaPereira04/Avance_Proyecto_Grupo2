import { IsString } from "class-validator";

export class CreateAddressDto {
    @IsString()
    user: string;
    @IsString()
    street: string;
    @IsString()
    city: string;
    @IsString()
    state: string;
    @IsString()
    zipCode: string;
    @IsString()
    country: string;
}
