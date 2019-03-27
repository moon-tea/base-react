import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { Router } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';

export default (WrappedComponent, mapStateToProps, mapDispatchToProps) => {
    //const history = createHistory();
    const ConnectedComponent = connect(
        mapStateToProps,
        mapDispatchToProps,
    )(WrappedComponent);

    class ConnectedWithProvider extends Component {
        render() {
            const { store, ...rest } = this.props;
            return (
                <Provider store={store}>
                    <ConnectedComponent {...rest} />
                </Provider>
            );
        }
    }

    ConnectedWithProvider.displayName = 'ConnectedWithProvider';

    ConnectedWithProvider.propTypes = {
        store: PropTypes.object,
    };

    return ConnectedWithProvider;
};
