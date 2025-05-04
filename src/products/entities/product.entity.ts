import { Product } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ProductEntity implements Product {
  @ApiProperty()
  id: number;

  @ApiProperty()
  product_name: string;

  @ApiProperty()
  product_price: number;

  @ApiProperty()
  product_unit: string;

  @ApiProperty()
  created_date: Date;

  @ApiProperty()
  updated_date: Date;
}
