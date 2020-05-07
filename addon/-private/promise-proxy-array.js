import PromiseProxyMixin from '@ember/object/promise-proxy-mixin';
import ArrayProxy from '@ember/array/proxy';
import { resolve } from 'rsvp';
import promiseProxyDecoratorFactory from './promise-proxy-decorator-factory';

export function createPromiseProxyArray (promise) {
    return ArrayProxy.extend(PromiseProxyMixin).create({ promise: promise || resolve() });
}

export default promiseProxyDecoratorFactory(createPromiseProxyArray);
