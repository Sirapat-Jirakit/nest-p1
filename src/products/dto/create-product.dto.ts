import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  product_name: string;

  @ApiProperty()
  product_price: number;

  @ApiProperty()
  product_unit: string;
}
