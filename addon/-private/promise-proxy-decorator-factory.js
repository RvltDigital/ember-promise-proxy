import { computed, get } from '@ember/object';

function promiseProxyDecoratorFactory(createProxyFn)
{
    return function () {
        const dependencies = arguments;

        return function (object, property, descriptor)
        {
            const _descriptor = {
                configurable: false,
                enumerable: true
            };

            if (typeof descriptor.value === 'function') {
                _descriptor.get = function () {
                    return createProxyFn(descriptor.value.call(this));
                };
            } else if (dependencies.length === 1 && !descriptor.value) {
                _descriptor.get = function () {
                    return createProxyFn(get(this, dependencies[0]));
                };
            } else {
                throw new Error('Wrong property configuration.');
            }

            return computed(...dependencies)(object, property, _descriptor);
        }
    }
}


export default promiseProxyDecoratorFactory;
