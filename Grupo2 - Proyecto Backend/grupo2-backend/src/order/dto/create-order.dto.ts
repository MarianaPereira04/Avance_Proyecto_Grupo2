import { IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
    @IsString()
    buyer: string;
    @IsString()
    status: string;
    @IsNumber()
    total: number;
}
