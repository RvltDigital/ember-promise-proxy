import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { promiseProxyObject, promiseProxyArray } from 'ember-promise-proxy';
import { all } from 'rsvp';
import { A } from '@ember/array';
import sortByCreatedDesc from '../utils/sort-by-created-desc';

class PostModel extends Model
{
    @attr('string') text;
    @attr('date') created;

    @belongsTo('user') author;
    @hasMany('comment') comments;

    @promiseProxyArray('comments')
    async authorsOfComments()
    {
        const comments = await this.comments;
        return A(await all(comments.mapBy('author')));
    }

    @promiseProxyObject('comments')
    async lastCommentAuthor()
    {
        const comments = (await this.comments).toArray();
        sortByCreatedDesc(comments);
        if (comments.length === 0) {
            return null;
        }
        return await comments[0].author;
    }

    @promiseProxyArray('comments')
    async sortedComments()
    {
        const comments = (await this.comments).toArray();
        sortByCreatedDesc(comments);
        return A(comments.reverse());
    }
}

export default PostModel;
