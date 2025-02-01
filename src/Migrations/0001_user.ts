import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUniqueUserNameAndTimestamp1649394385335 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deleted" BOOLEAN NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleted"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
    }
}
