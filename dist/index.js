"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = exports.LOCATIONS_SVC = exports.USERS_SVC = void 0;
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
                durable: false,
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
                durable: false,
            },
        },
    }),
};
exports.services = config_1.configService.getSvc();
