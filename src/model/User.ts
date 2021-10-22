import { PrimaryKey, Table, Column, Model, Scopes, BelongsTo, ForeignKey, AutoIncrement } from "sequelize-typescript";
import Role from "./Role";

@Table({ tableName: "users", schema: "public" })
export default class User extends Model<User> {

	@PrimaryKey
	@AutoIncrement
	@Column
	id?: bigint;

	@Column
	name!: string;

	@Column
	username!: string;

	@Column
	password!: string;

	// @Column
	// mobilenumber!: string;

	@ForeignKey(() => Role)
	@Column
	role_id?: number

	@BelongsTo(() => Role)
	role?: Role;
}
