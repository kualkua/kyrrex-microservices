declare class ConfigService {
    private env;
    constructor(env: string | undefined);
    getBrokerUri(): string;
    getSvc(): {
        USERS: string;
        LOCATIONS: string;
    };
    getQueue(): {
        users: string;
        locations: string;
    };
    getEnv(): string;
}
declare const configService: ConfigService;
export { configService };
