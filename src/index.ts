import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { configService } from './config';

export const USERS_SVC = {
    provide: configService.getSvc().USERS,
    useFactory: () =>
      ClientProxyFactory.create({
        transport: Transport.RMQ,
        options: {
          urls: [configService.getBrokerUri()],
          queue: configService.getQueue().users,
          queueOptions: {
            durable: false,
          },
        },
      }),
  };

export const LOCATIONS_SVC = {
    provide: configService.getSvc().LOCATIONS,
    useFactory: () =>
      ClientProxyFactory.create({
        transport: Transport.RMQ,
        options: {
          urls: [configService.getBrokerUri()],
          queue: configService.getQueue().locations,
          queueOptions: {
            durable: false,
          },
        },
      }),
  };

export const services = configService.getSvc();
