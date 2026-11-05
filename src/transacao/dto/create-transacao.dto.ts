import { IsString, IsNumber, IsEnum, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateTransacaoDto {
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @IsEnum(['receita', 'despesa'], { message: 'O tipo deve ser receita ou despesa' })
  tipo: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsBoolean()
  consumoConsciente: boolean;
}