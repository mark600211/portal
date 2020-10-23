/* eslint-disable prefer-const */
import { ClientOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@app/config';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class KafkaClientOptions {
  logger = new Logger(this.constructor.name);

  public kafkaClientOptions: ClientOptions;

  constructor(private readonly configService: ConfigService) {}

  async getKafkaOptions(): Promise<ClientOptions> {
    let brokers: string[] = [];

    const kafkaHost = this.configService.get<string>('KAFKA_HOST');

    for await (let i of [1, 2, 3]) {
      const port = this.configService.get<number>(`KAFKA_PORT${i}`);
      if (port) {
        brokers.push(`${kafkaHost}:${port}`);
      }
    }

    return (this.kafkaClientOptions = {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'act',
          brokers,
        },
        consumer: {
          groupId: 'act-consumer',
        },
      },
    });
  }
}