import { PrimaryKey, Table, Column, Model, Scopes, BelongsTo, ForeignKey, HasMany, AutoIncrement } from "sequelize-typescript";
import { Col } from "sequelize/types/lib/utils";
import Methodology from "./Methodology";
@Table({ tableName: "cards", schema: "public" })
export default class Card extends Model<Card> {

	@PrimaryKey
	@AutoIncrement
	@Column
	id!: bigint;

	@Column
	name!: string;
	
	@Column
	document_type!: string;
	
	@Column
	journey_type!: string;
	
	@Column
	category!: string;
	
	// @ForeignKey untuk methodology dan comment (jika pake)
	@ForeignKey(() => Methodology)
	@Column
	methodology_id?: number

	@BelongsTo(() => Methodology)
	methodology?: Methodology;

	@Column
	product_manager!: string;
	
	@Column
	waspang!: string;
	
	@Column
	status!: string;
	
	@Column
	due_date!: Date;
	
	@Column
	task!: string;

	@Column
	complexity!: string;
	
	@Column
	description!: string;
	

	@Column
	scrum_number!: number;
	
	@Column
	sprint_number!: number;
	
	@Column
	project_type!: string;
	
	@Column
	business_user!: string;
	
	@Column
	node_impacted!: string;
	
	@Column
	source!: string;
	
	@Column
	vendor_name?: string;
	
	@Column
	mandays?: string;
	
}
