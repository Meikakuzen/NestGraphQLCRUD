import { Field, InputType } from "@nestjs/graphql";
import {IsNotEmpty, IsString, MaxLength} from 'class-validator'


@InputType()
export class CreateTodoInput {

    @Field(()=> String, {description: 'what need to be done', nullable: true})
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    description?: string;
}