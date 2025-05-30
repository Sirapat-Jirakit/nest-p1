import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  product_name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 0 })
  product_price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  product_unit: string;
}
