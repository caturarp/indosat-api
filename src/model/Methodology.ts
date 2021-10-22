import { PrimaryKey, Table, Column, Model, Scopes, BelongsTo, ForeignKey, HasMany, AutoIncrement } from "sequelize-typescript";
import { Col } from "sequelize/types/lib/utils";
import User from './User'
@Table({ tableName: "methodologies", schema: "public" })
export default class Methodology extends Model<Methodology> {

	@PrimaryKey
	@AutoIncrement
	@Column
	id!: bigint;

	@Column
	name!: string;

}
