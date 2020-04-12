import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../Global/Spinner';
import Fatal from '../Global/Fatal';
import * as taskActions from '../../actions/taskActions';

const Save = (props) => {

    const handleSetUserId = e => {
        props.setUserId(e.target.value)
    }

    const handleSetTitle = e => {
        props.setTitle(e.target.value)
    }

    const hanldeSubmit = e => {
        e.preventDefault();
        const { user_id, title, saveTask } = props;
        const new_task = {
            userId: user_id,
            title: title,
            completed: false,
        };

        saveTask(new_task);

    }

    const disableSave = () => {
        const {
            user_id,
            title,
            loading
        } = props;

        return (loading || (!user_id || !title)) ? true : false;
    }

    const showAction = () => {
        const { error, loading } = props;
        if(loading) {
            return <Spinner/>
        }
        if(error) {
            return <Fatal message={error}/>
        }
    }

    return (
        <div>
            <h1>
                Save task from
            </h1>
            User id: 
            <input 
                type='number'
                id='user_id'
                onChange={handleSetUserId}
            />
            <br/><br/>
            Title: 
            <input 
                type='text'
                id='title'
                onChange={handleSetTitle}
            />
            <br/><br/>
            <button 
                type="button" 
                onClick={hanldeSubmit}
                disabled={ disableSave() }
            >Submit</button>
            { showAction() }
        </div>
    );
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;
 
export default connect(mapStateToProps, taskActions)(Save);