declare class ConfigService {
    private env;
    constructor(env: string | undefined);
    getBrokerUri(): string;
    getSvc(): {
        USERS: string;
        LOCATIONS: string;
        AFFILIATE: string;
    };
    getQueue(): {
        users: string;
        locations: string;
        affiliate: string;
    };
    getEnv(): string;
}
declare const configService: ConfigService;
export { configService };
