import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {


    @Query( ()=> String, {description: "Retorna hola mundo", name: "hello"} )
    helloWorld(): string {
        return "Hola Mundo"
    }

    @Query(()=>Float, {name: "randomNumber"})
    getRandomNumber(): number {
        return Math.random() * 10
    }

    @Query(()=>Int, {name: "getRandom"})
    getRandomFromZeroTo( @Args('to', {nullable: true, type: ()=> Int}) to: number = 6): number{
        return Math.floor(Math.random() * to)
    }

}
