# react-redux-playground

Inspired by the courses of [Redux 全局状态管理](https://www.bilibili.com/video/BV1oE411V7RW)

## Getting started

Several key steps of how this project is constructed:

- Skeleton

```shell
npx create-react-app react-redux-playground
npm i redux react-redux
npm start
```

- Preparedness

reducers.js - A normal function to handle the core logics

```js
const initState = {count: 0};
const reducers = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      return {count: state.count + 1};
    default:
      return initState;
  }
};

export {
  reducers
};
```

index.js - An initialized section to register Provider of `react-redux` module

```js
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducers} from './reducers';
const store = createStore(reducers);
root.render(
    ...
    <Provider store={store}>
      ....
    </Provider>
    ...
);
```

- UI Components

App.js - Using the connect of `react-redux` module to operate and assign the states

```js
import {connect} from 'react-redux';

// Proactive of mapDispatchToProps
const ReduxButton = connect(null, (dispatch) => {
  return {
    onAddClicked: () => {
      dispatch({
        type: 'add'
      });
    }
  }
})((props) => {
  return (
    <button onClick={props.onAddClicked}>+</button>
  )
});

// Passive of mapStateToProps
const ReduxText = connect((state) => {
  return state;
})((props) => {
  return (
    <p>{props.count}</p>
  )
});
```



