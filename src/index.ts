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
            durable: true,
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
            durable: true,
          },
        },
      }),
  };

export const LINKS_SVC = {
  provide: configService.getSvc().LINKS,
  useFactory: () =>
    ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.getBrokerUri()],
        queue: configService.getQueue().links,
        queueOptions: {
          durable: false,
        },
      },
    }),
  };

export const RATES_SVC = {
  provide: configService.getSvc().RATES,
  useFactory: () =>
    ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.getCommonBrokerUri()],
        queue: configService.getQueue().rates,
        queueOptions: {
          durable: true,
        },
      },
    }),
  };

export const MAILER_SVC = {
    provide: configService.getSvc().MAILER,
    useFactory: () =>
        ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [configService.getBrokerUri()],
                queue: configService.getQueue().mailer,
                queueOptions: {
                    durable: true,
                },
            },
        }),
};
export const AFFILIATE_GATEWAY_SVC = {
    provide: configService.getSvc().AFFILIATE_GATEWAY,
    useFactory: () =>
        ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [configService.getBrokerUri()],
                queue: configService.getQueue().affiliate_gateway,
                queueOptions: {
                    durable: true,
                },
            },
        }),
};



export const services = configService.getSvc();
