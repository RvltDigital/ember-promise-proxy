import Component from '@glimmer/component';
import { get } from '@ember/object';
import { promiseProxyObject } from 'ember-promise-proxy';

class PostComponent extends Component
{
    @promiseProxyObject('args.model.authorsOfComments')
    async commentsInfo()
    {
        const authors = await get(this, 'args.model.authorsOfComments');
        if (!authors) {
            return null;
        }
        const names = Array.from(new Set(authors.mapBy('name'))).join(', ');

        return `Commented by ${names}`;
    }
}

export default PostComponent;
