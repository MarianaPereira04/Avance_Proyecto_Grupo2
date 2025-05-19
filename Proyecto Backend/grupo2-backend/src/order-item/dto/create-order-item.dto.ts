import { IsNumber, IsString } from "class-validator"

export class CreateOrderItemDto {
    @IsString()
    order: string;
    @IsString()
    product: string;
    @IsNumber()
    quantity: number;
    @IsNumber()
    price: number;
}
