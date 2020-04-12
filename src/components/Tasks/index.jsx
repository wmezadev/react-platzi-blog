import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as taskActions from '../../actions/taskActions';
import Spinner from '../Global/Spinner';
import Fatal from '../Global/Fatal';

const Tasks = (props) => {
    const { getAll, tasks, loading, error } = props;

    useEffect(() => {
        if(!Object.keys(tasks).length){
            getAll();
        }
    }, [tasks, getAll]);

    const showContent = () => {
        if(error) {
            return <Fatal/>;
        }

        if(loading) {
            return <Spinner/>;
        }

        return Object.keys(tasks).map((user_id) => (
            <div key={user_id}>
                <h2>
                    User: {user_id}
                </h2>
                <div className='tasks_container'>
                    { setTasks (user_id) }
                </div>
            </div>
        ))
    }

    const setTasks = (user_id) => {
        const task_by_user = {
            ...tasks[user_id]
        }

        return Object.keys(task_by_user).map((task_id) => (
            <div key={task_id}>
                <input type='checkbox' defaultChecked={task_by_user[task_id].completed} />
                { task_by_user[task_id].title }
            </div>
        ));
    }

    return (
        <div>
            <Link to='/tasks/save'>
                Add task
            </Link>
            { showContent() }
        </div>
    );
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, taskActions)(Tasks);