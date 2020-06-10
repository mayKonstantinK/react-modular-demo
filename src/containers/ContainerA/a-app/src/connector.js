import { observe, streamProps } from 'frint-react';
import { from } from 'rxjs';

function connect(mapStateToProps, mapDispatchToProps) {
    return function (Component) {
        return observe(function (app) {

        const store = app.options.parentApp.get('store');
        const state$ = from(store);

        return streamProps()
            .set(state$, mapStateToProps)
            .setDispatch(mapDispatchToProps, store)
            .get$();
        })(Component);
    };
};

export default connect;