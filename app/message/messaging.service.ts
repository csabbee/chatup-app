import {Injectable} from 'angular2/core';

export interface MessageObject {
    event: string;
    username: string;
    for: string;
    timestamp: Date;
    message: string;
}

@Injectable()
export class Messaging {
    
}