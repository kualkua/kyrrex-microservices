// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

class ConfigService {
  constructor(private env: string | undefined) {}

  public getBrokerUri(): string {
    return process.env.BROKER_URI || 'amqp://rabbitmq:rabbitmq@localhost:5672';
  }

  public getSvc() {
    return (() => ({
      USERS: 'USERS_SVC',
      LOCATIONS: 'LOCATIONS_SVC',
    }))();
  }

  public getQueue() {
    return (() => ({
      users: process.env.PAYMENTS_QUEUE || 'users',
      locations: process.env.ROOMSMONEY_QUEUE || 'locations',
    }))();
  }

  public getEnv() {
    return this.env || 'development';
  }
}

const configService = new ConfigService(process.env.NODE_ENV);

export { configService };
