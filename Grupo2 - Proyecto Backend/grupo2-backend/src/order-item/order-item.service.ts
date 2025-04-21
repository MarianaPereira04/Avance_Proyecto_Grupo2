import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class OrderItemService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  create(createOrderItemDto: CreateOrderItemDto) {
    return this.orderItem.create({
      data: createOrderItemDto
    });
  }

  findOne() {
    return this.orderItem.findFirst();
  }


  remove(id: string) {
    return this.orderItem.delete({where: {id}});
  }
}
