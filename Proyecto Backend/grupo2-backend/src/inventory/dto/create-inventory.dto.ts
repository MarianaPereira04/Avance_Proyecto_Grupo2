import { IsNumber, IsString } from "class-validator";

export class CreateInventoryDto {
    @IsString()
    product: string;
    @IsNumber()
    quantity: number;
    @IsString()
    artisan: string;
}
