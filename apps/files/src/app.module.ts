import { ConfigModule } from '@app/config';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { StorageModule } from './storage/storage.module';
import { SynologyModule } from './synology/synology.module';
import path from 'path';
import { ProtoModule } from '@app/proto';
import { Modules } from '@app/models';
import { DocModule } from './doc/doc.module';
import { DbModule } from '@app/db';

@Module({
  imports: [
    StorageModule,
    DbModule.forRoot(),
    ConfigModule.register({ folder: path.resolve(__dirname, './config') }),
    ProtoModule.register([Modules.SYN, Modules.PYTHON], Modules.FILES),
    SynologyModule,
    DocModule,
  ],
  providers: [AppService],
})
export class AppModule {}
