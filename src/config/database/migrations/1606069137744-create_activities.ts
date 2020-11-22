import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateActivities1606069137744 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.createTable(
            new Table({
              name: 'Activities',
              columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isGenerated: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'subdescription',
                    type: 'varchar',
                },
                {
                    name: 'assign',
                    type: 'varchar',
                },
                {
                    name: 'initial_date',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'final_date',
                    type: 'timestamp',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.dropTable('Activities');
    }

}
