import {Knex} from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('materias', table => {
        table.decimal('id').primary();

        table.string('title').notNullable();
        
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('materias');
}