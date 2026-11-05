import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransacaoController } from './transacao.controller';
import { TransacaoService } from './transacao.service';
import { Transacao, TransacaoSchema } from './schemas/transacao.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Transacao.name, schema: TransacaoSchema }]),
  ],
  controllers: [TransacaoController],
  providers: [TransacaoService],
})
export class TransacaoModule {}