import { Field, InputType, Int } from "@nestjs/graphql";
import {IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min} from 'class-validator'


@InputType()
export class UpdateTodoInput {


    @Field(()=> Int, {description: "id"})
    @IsInt()
    @Min(1)
    id: number

    @Field(()=> String, {description: 'what need to be done', nullable: true})
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    @IsOptional()
    description?: string;

    
    @Field(()=> Boolean, {description: "Done or not", nullable: true})
    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    done?: boolean
 
}