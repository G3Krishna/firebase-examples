import React, { PropTypes } from 'react';
<<<<<<< HEAD
import classnames from 'classnames';
=======
import classname from 'classname';
>>>>>>> 1cc0ac9d47a464d9cdf5346db4e09be29b4f5942

import {
    ALL_TODOS,
    ACTIVE_TODOS,
    COMPLETED_TODOS
} from '../constants'
import { pluralize } from '../utils'

export default function TodoFooter ({
    count,
    nowShowing,
    completedCount,
    onClearCompleted,
    changeNav
}) {
    const activeTodoWord = (count, 'item');

    const onChangeNav = (location) => {
        changeNav(location)
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{count}</strong> {activeTodoWord} left
            </span>
            <ul className="filters">
                <li>
                    <a
                        onClick={onChangeNav.bind(this, '/')}
<<<<<<< HEAD
                        className={classnames({selected: nowShowing === ALL_TODOS})}>
=======
                        className={classname({selected: nowShowing === ALL_TODOS})}>
>>>>>>> 1cc0ac9d47a464d9cdf5346db4e09be29b4f5942
                            All
                    </a>
                </li>
                {' '}
                <li>
                    <a
                        onClick={onChangeNav.bind(this, '/active')}
<<<<<<< HEAD
                        className={classnames({selected: nowShowing === ACTIVE_TODOS})}>
=======
                        className={classname({selected: nowShowing === ACTIVE_TODOS})}>
>>>>>>> 1cc0ac9d47a464d9cdf5346db4e09be29b4f5942
                            Active
                    </a>
                </li>
                {' '}
                <li>
                    <a
                        onClick={onChangeNav.bind(this, '/completed')}
                        className={classnames({selected: nowShowing === COMPLETED_TODOS})}>
                            Completed
                    </a>
                </li>
            </ul>
        </footer>
    )
}

TodoFooter.propTypes = {
    count: PropTypes.number.isRequired,
    nowShowing: PropTypes.string.isRequired,
    completedCount: PropTypes.number.isRequired,
    onClearCompleted: PropTypes.func.isRequired
}