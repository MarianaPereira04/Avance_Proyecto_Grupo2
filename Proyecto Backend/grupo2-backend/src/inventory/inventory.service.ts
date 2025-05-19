import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class InventoryService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }

  create(createInventoryDto: CreateInventoryDto) {
    return this.inventory.create({
      data: createInventoryDto
    })
  }

  findAll() {
    return this.inventory.findMany({
      orderBy:{
        createdAt: 'desc'
      }
  });
  }

  update(id: string, updateInventoryDto: UpdateInventoryDto) {
    return this.inventory.update({
      where: {id},
      data: updateInventoryDto
    });
  }

  remove(id: string) {
    return this.inventory.delete({where: {id}});
  }
}
