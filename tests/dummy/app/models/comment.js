import Model, { attr, belongsTo } from '@ember-data/model';

class CommentModel extends Model
{
    @attr('string') text;
    @attr('date') created;

    @belongsTo('user') author;
    @belongsTo('post') post;
}

export default CommentModel;
