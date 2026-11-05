import { Controller, Get, Post, Body } from '@nestjs/common';
import { TransacaoService } from './transacao.service';
import { CreateTransacaoDto } from './dto/create-transacao.dto';

@Controller('transacoes')
export class TransacaoController {
  constructor(private readonly transacaoService: TransacaoService) {}

  @Post()
  async criar(@Body() createTransacaoDto: CreateTransacaoDto) {
    return this.transacaoService.criar(createTransacaoDto);
  }

  @Get()
  async listar() {
    return this.transacaoService.listarComMetricas();
  }
}