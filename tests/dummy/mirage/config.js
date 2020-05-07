export default function() {

    this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
    this.timing = 500;      // delay for each request, automatically set to 0 during testing

    const models = [ 'users', 'posts', 'comments' ];

    for (const model of models) {
        this.get(`/${model}/:id`, (schema, request) => schema[model].find(request.params.id));
        this.get(`/${model}`, (schema, request) => {
            if (!request.queryParams['filter[id]']) {
                return schema[model].all();
            }
            const ids = request.queryParams['filter[id]'].split(',');
            return schema[model].where((record) => ids.indexOf(record.id) !== -1);
        });
    }
}
