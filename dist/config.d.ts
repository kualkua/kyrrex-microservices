declare class ConfigService {
    private env;
    constructor(env: string | undefined);
    getBrokerUri(): string;
    getCommonBrokerUri(): string;
    getSvc(): {
        USERS: string;
        LOCATIONS: string;
        LINKS: string;
        RATES: string;
        MAILER: string;
        GATEWAY: string;
    };
    getQueue(): {
        users: string;
        locations: string;
        links: string;
        rates: string;
        mailer: string;
        gateway: string;
    };
    getEnv(): string;
}
declare const configService: ConfigService;
export { configService };
