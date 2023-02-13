import { DataSource, Repository } from 'typeorm';

import { Photo } from '../../models/photo';
import { DATABASE_CONNECTION, REPOSITORIES } from '../../constants';

export const photoProviders = [
  {
    provide: REPOSITORIES.PHOTO,
    useFactory: (dataSource: DataSource): Repository<Photo> =>
      dataSource.getRepository(Photo),
    inject: [DATABASE_CONNECTION],
  },
];
