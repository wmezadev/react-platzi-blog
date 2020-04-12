import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../../actions/taskActions';

const Tasks = (props) => {
    useEffect(() => {
        props.getAll();
    }, []);

    console.log(props)
    return (
        <div>
            Tasks
        </div>
    );
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(mapStateToProps, taskActions)(Tasks);