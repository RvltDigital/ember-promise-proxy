import PromiseProxyMixin from '@ember/object/promise-proxy-mixin';
import ObjectProxy from '@ember/object/proxy';
import { resolve } from 'rsvp';
import promiseProxyDecoratorFactory from './promise-proxy-decorator-factory';

export function createPromiseProxyObject (promise) {
    return ObjectProxy.extend(PromiseProxyMixin).create({ promise: promise || resolve() });
}

export default promiseProxyDecoratorFactory(createPromiseProxyObject);
