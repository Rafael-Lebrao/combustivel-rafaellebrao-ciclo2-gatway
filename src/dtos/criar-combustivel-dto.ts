import { IsNumber, IsNotEmpty, IsString, IsArray, ArrayMinSize } from 'class-validator'

export class CriarCombustivelDto{

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsNumber()
    preco: number;

}