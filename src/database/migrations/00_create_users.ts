import {Knex} from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('photo').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}