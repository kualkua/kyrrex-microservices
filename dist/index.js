"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = exports.AFFILIATE_GATEWAY_SVC = exports.MAILER_SVC = exports.RATES_SVC = exports.LINKS_SVC = exports.LOCATIONS_SVC = exports.USERS_SVC = void 0;
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("./config");
exports.USERS_SVC = {
    provide: config_1.configService.getSvc().USERS,
    useFactory: () => microservices_1.ClientProxyFactory.create({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [config_1.configService.getBrokerUri()],
            queue: config_1.configService.getQueue().users,
            queueOptions: {
                durable: true,
            },
        },
    }),
};
exports.LOCATIONS_SVC = {
    provide: config_1.configService.getSvc().LOCATIONS,
    useFactory: () => microservices_1.ClientProxyFactory.create({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [config_1.configService.getBrokerUri()],
            queue: config_1.configService.getQueue().locations,
            queueOptions: {
                durable: true,
            },
        },
    }),
};
exports.LINKS_SVC = {
    provide: config_1.configService.getSvc().LINKS,
    useFactory: () => microservices_1.ClientProxyFactory.create({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [config_1.configService.getBrokerUri()],
            queue: config_1.configService.getQueue().links,
            queueOptions: {
                durable: false,
            },
        },
    }),
};
exports.RATES_SVC = {
    provide: config_1.configService.getSvc().RATES,
    useFactory: () => microservices_1.ClientProxyFactory.create({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [config_1.configService.getCommonBrokerUri()],
            queue: config_1.configService.getQueue().rates,
            queueOptions: {
                durable: true,
            },
        },
    }),
};
exports.MAILER_SVC = {
    provide: config_1.configService.getSvc().MAILER,
    useFactory: () => microservices_1.ClientProxyFactory.create({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [config_1.configService.getBrokerUri()],
            queue: config_1.configService.getQueue().mailer,
            queueOptions: {
                durable: true,
            },
        },
    }),
};
exports.AFFILIATE_GATEWAY_SVC = {
    provide: config_1.configService.getSvc().AFFILIATE_GATEWAY,
    useFactory: () => microservices_1.ClientProxyFactory.create({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [config_1.configService.getBrokerUri()],
            queue: config_1.configService.getQueue().affiliate_gateway,
            queueOptions: {
                durable: true,
            },
        },
    }),
};
exports.services = config_1.configService.getSvc();
