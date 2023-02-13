import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export interface IPhoto {
  id: number;
  name: string;
  description: string;
  filename: string;
  views: number;
  isPublished: boolean;
}

@Entity()
export class Photo implements IPhoto {
  constructor(partial?: Partial<Photo>) {
    Object.assign(this, partial);
  }
  @ApiProperty({
    description: 'The id of the Photo',
  })
  @PrimaryGeneratedColumn('increment')
  @IsNotEmpty({ message: 'The id of the Photo is required' })
  id: number;

  @ApiProperty({
    description: 'The name of the Photo',
  })
  @Column({ type: 'varchar', length: 500 })
  @IsNotEmpty({ message: 'The name of the Photo is required' })
  name: string;

  @ApiProperty({
    description: 'The description of the Photo',
  })
  @Column('text')
  @IsNotEmpty({ message: 'The description of the Photo is required' })
  description: string;

  @ApiProperty({
    description: 'The filename of the Photo',
  })
  @Column({ type: 'varchar', length: 500 })
  @IsNotEmpty({ message: 'The filename of the Photo is required' })
  filename: string;

  @ApiProperty({
    description: 'The views of the Photo',
  })
  @Column('int')
  @IsNotEmpty({ message: 'The views of the Photo is required' })
  views: number;

  @ApiProperty({
    description: 'The isPublished of the Photo',
  })
  @Column('boolean', { default: false })
  isPublished: boolean;
}
