// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

class ConfigService {
  constructor(private env: string | undefined) {}

  public getBrokerUri(): string {
    return process.env.BROKER_URI || 'amqp://rabbitmq:rabbitmq@localhost:5672';
  }

  public getCommonBrokerUri(): string {
    return process.env.COMMON_BROKER_URI || 'amqp://rabbitmq:rabbitmq@localhost:5672';
  }

  public getSvc() {
    return (() => ({
      USERS: 'USERS_SVC',
      LOCATIONS: 'LOCATIONS_SVC',
      LINKS: 'LINKS_SVC',
      RATES: 'RATES_SVC',
      MAILER: 'MAILER_SVC',
      AFFILIATE_GATEWAY: 'AFFILIATE_GATEWAY_SVC'
    }))();
  }

  public getQueue() {
    return (() => ({
      users: process.env.PAYMENTS_QUEUE || 'users',
      locations: process.env.ROOMSMONEY_QUEUE || 'locations',
      links: process.env.LINKS_QUEUE || 'links',
      rates: process.env.RATES_QUEUE || 'rates',
      mailer: process.env.MAILER_QUEUE || 'mailer',
      affiliate_gateway: process.env.AFFILIATE_GATEWAY_QUEUE || 'affiliate_gateway',
    }))();
  }

  public getEnv() {
    return this.env || 'development';
  }
}

const configService = new ConfigService(process.env.NODE_ENV);

export { configService };
