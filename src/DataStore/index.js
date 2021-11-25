import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import AuthReducer from './AuthReducer';
import CourseReducer from './CourseReducer';
import CourseScheduleReducer from "./CourseScheduleReducer";
import BlogReducer from './BlogReducer';
import SchoolReducer from "./SchoolReducer"
import SchoolCourseReducer from './SchoolCoursesReducer';
import shoppingReducer from '../shopping/shopping-reducer'

import { composeWithDevTools } from "redux-devtools-extension";


const store = configureStore({
    composeWithDevTools,
    reducer: {
        auth: AuthReducer,
        course: CourseReducer,
        blog: BlogReducer,
        courseSchedule: CourseScheduleReducer,
        school: SchoolReducer,
        schoolCourses: SchoolCourseReducer,
        shop: shoppingReducer,
    },
    middleware: [
        ...getDefaultMiddleware(),
    ]

    
});

export default store
