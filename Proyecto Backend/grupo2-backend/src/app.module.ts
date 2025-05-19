import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { InventoryModule } from './inventory/inventory.module';
import { AddressModule } from './address/address.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [UserModule, ProductModule, CategoryModule, OrderModule, OrderItemModule, InventoryModule, AddressModule, NotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
