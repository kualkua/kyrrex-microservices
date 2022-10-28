export declare const USERS_SVC: {
    provide: string;
    useFactory: () => import("@nestjs/microservices").ClientProxy & import("@nestjs/microservices").Closeable;
};
export declare const LOCATIONS_SVC: {
    provide: string;
    useFactory: () => import("@nestjs/microservices").ClientProxy & import("@nestjs/microservices").Closeable;
};
export declare const LINKS_SVC: {
    provide: string;
    useFactory: () => import("@nestjs/microservices").ClientProxy & import("@nestjs/microservices").Closeable;
};
export declare const RATES_SVC: {
    provide: string;
    useFactory: () => import("@nestjs/microservices").ClientProxy & import("@nestjs/microservices").Closeable;
};
export declare const services: {
    USERS: string;
    LOCATIONS: string;
    LINKS: string;
    RATES: string;
};
