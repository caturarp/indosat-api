import { PrimaryKey, Table, Column, Model, Scopes, BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";

@Table({tableName: "roles", schema: "public"})
export default class User extends Model<User> {

	@PrimaryKey
	@Column
	id!: bigint;
    
	@Column
	name!: string;
    
    @HasMany(()=> User)
    users?: User[]
}
