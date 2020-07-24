import { Job } from '../job/job';
import { Client } from '../client/client';

export interface Quote {
    ID: number;
    client: Client;
    firstLineAddress: String;
    secondLineAddress: String;
    thirdLineAddress: String;
    quoteValue: number;
    jobs: Job[];
    comments: String;
}