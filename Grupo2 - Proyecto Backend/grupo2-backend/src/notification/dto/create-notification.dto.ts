import { IsString } from "class-validator";

export class CreateNotificationDto {
    @IsString()
    user: string;
    @IsString()
    message: string;
}
