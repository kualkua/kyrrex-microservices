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
    };
    getQueue(): {
        users: string;
        locations: string;
        links: string;
        rates: string;
        mailer: string;
    };
    getEnv(): string;
}
declare const configService: ConfigService;
export { configService };
