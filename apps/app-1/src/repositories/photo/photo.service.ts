import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo, IPhoto } from '../../models/photo';
import { REPOSITORIES } from '../../constants';

@Injectable()
export class PhotoService {
  constructor(
    @Inject(REPOSITORIES.PHOTO)
    private readonly repository: Repository<Photo>
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.repository.find();
  }
}
