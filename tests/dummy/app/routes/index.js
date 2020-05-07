import Route from '@ember/routing/route';

class IndexRoute extends Route
{
    model()
    {
        return this.store.findRecord('user', 2);
    }
}

export default IndexRoute;
