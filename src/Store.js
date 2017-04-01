'use strict'

import {observable, action, computed} from 'mobx'

export class Store {
  @observable todo = '';
  @observable todos = [];

  @action setTodo (todo) {
    this.todo = todo
  }

  @action addTodo () {
    this.todos.push(this.todo)
    this.todo = ''
  }

  @computed get hasTodos () {
    return this.todos.length > 0
  }
}