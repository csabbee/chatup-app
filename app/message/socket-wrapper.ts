/// <reference path="../../typings/typedef.d.ts"/>
import {Injectable} from 'angular2/core';

@Injectable()
export class SocketWrapper {
    private io: SocketIOClientStatic;
}