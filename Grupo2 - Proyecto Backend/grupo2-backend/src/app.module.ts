import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [UserModule, ProductModule, CategoryModule, OrderModule, OrderItemModule, InventoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
