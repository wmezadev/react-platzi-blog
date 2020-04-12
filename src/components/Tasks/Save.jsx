import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Global/Spinner';
import Fatal from '../Global/Fatal';
import * as taskActions from '../../actions/taskActions';
import { Redirect } from 'react-router-dom';

const Save = (props) => {

    useEffect(() => {
        const {
            match: { params: { us_id, ta_id } },
            tasks,
            setUserId,
            setTitle
        } = props;

        if(us_id && ta_id){
            const task = tasks[us_id][ta_id];
            setUserId(task.userId);
            setTitle(task.title);
        }
    }, [props]);

    const handleSetUserId = e => {
        props.setUserId(e.target.value)
    }

    const handleSetTitle = e => {
        props.setTitle(e.target.value)
    }

    const hanldeSubmit = e => {
        e.preventDefault();
        const { 
            match: { params: { us_id, ta_id } },
            tasks,
            user_id, 
            title, 
            saveTask,
            editTask
        } = props;
        const new_task = {
            userId: user_id,
            title: title,
            completed: false
        };

        if(us_id && ta_id){
            const task = tasks[us_id][ta_id];
            const edited_task = {
                ...new_task,
                completed: task.completed,
                id: task.id
            };
            editTask(edited_task);
        } else {
            saveTask(new_task);
        }
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
            { props.go_back ? <Redirect to='/tasks'/> : null }
            <h1>
                Save task from
            </h1>
            User id: 
            <input 
                type='number'
                id='user_id'
                value={props.user_id}
                onChange={handleSetUserId}
            />
            <br/><br/>
            Title: 
            <input 
                type='text'
                id='title'
                value={props.title}
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