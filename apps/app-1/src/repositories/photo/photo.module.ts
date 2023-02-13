import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { photoProviders } from './photo.providers';
import { PhotoService } from './photo.service';

@Module({
  imports: [DatabaseModule],
  providers: [...photoProviders, PhotoService],
  exports: [PhotoService],
})
export class PhotoModule {}
