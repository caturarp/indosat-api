import { PrimaryKey, Table, Column, Model, Scopes, BelongsTo, ForeignKey, HasMany, AutoIncrement } from "sequelize-typescript";
import User from './User'
@Table({ tableName: "roles", schema: "public" })
export default class Role extends Model<Role> {

	@PrimaryKey
	@AutoIncrement
	@Column
	id!: bigint;

	@Column
	name!: string;

	@HasMany(() => User)
	users?: User[]
}
