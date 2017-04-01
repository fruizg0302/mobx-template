'use strict'

import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {autobind} from 'core-decorators'

@inject('store')
@observer
export class App extends Component {

  @autobind
  handleTodoChange ({target: {value}}) {
    this.props.store.setTodo(value)
  }

  @autobind
  handleTodoAdd () {
    this.props.store.addTodo()
  }

  render () {
    const {store} = this.props
    const {todo, todos} = store

    return (
      <div>
        <input
          type='text'
          value={todo}
          onChange={this.handleTodoChange}
        />
        <button onClick={this.handleTodoAdd}>
          GO GO GO
        </button>
        <div>
          {store.hasTodos ? (
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>
                  {todo}
                </li>
              ))}
            </ul>
          ) : (
            <p>Nothing TODO :/</p>
          )}
        </div>
      </div>
    )
  }
}