import { Photo } from '../../models/photo';
import { COLUMN_TYPES, createAndUpdateDates } from '../utils';
import { Table, MigrationInterface, QueryRunner } from 'typeorm';

export class initialMigration1676241362654 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('************ CREATE TABLE SCHEMA***********');
    await queryRunner.createTable(
      new Table({
        name: 'photo',
        columns: [
          {
            name: 'id',
            type: COLUMN_TYPES.INT,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: COLUMN_TYPES.VARCHAR,
            length: '500',
          },
          {
            name: 'description',
            type: COLUMN_TYPES.TEXT,
          },
          {
            name: 'filename',
            type: COLUMN_TYPES.VARCHAR,
            length: '500',
          },
          {
            name: 'views',
            type: COLUMN_TYPES.INT,
          },
          {
            name: 'isPublished',
            type: COLUMN_TYPES.BOOLEAN,
            default: false,
          },
          ...createAndUpdateDates,
        ],
      }),
      true /* ifNotExists */
    );

    console.log('************ INSERT DEFAULT DATA ***********');

    const photo = new Photo({
      name: 'Me and Bears',
      description: 'I am near polar bears',
      filename: 'photo-with-bears.jpg',
      views: 1,
      isPublished: true,
    });

    await queryRunner.manager.save(photo);

    console.log('************ DONE ***********');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
