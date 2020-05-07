import Model, { attr, hasMany } from '@ember-data/model';
import { promiseProxyObject, promiseProxyArray } from 'ember-promise-proxy';
import { A } from '@ember/array';
import sortByCreatedDesc from '../utils/sort-by-created-desc';

class UserModel extends Model
{
    @attr('string') name;
    @attr('string') surname;

    @hasMany('post') posts;
    @hasMany('comment') comments;

    @promiseProxyObject('sortedPosts')
    async lastPost()
    {
        return (await this.sortedPosts)[0];
    }

    @promiseProxyArray('posts')
    async sortedPosts()
    {
        const posts = (await this.posts).toArray();
        sortByCreatedDesc(posts);
        return A(posts);
    }
}

export default UserModel;
