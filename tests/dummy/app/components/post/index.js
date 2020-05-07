import Component from '@glimmer/component';
import { promiseProxyObject } from 'ember-promise-proxy';

class PostComponent extends Component
{
    get time()
    {
        return this.args.model.created.toLocaleDateString();
    }

    @promiseProxyObject('args.model.lastCommentAuthor') lastCommentAuthor;
}

export default PostComponent;
