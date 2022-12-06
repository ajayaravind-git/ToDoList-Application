[1mdiff --git a/src/Todo.js b/src/Todo.js[m
[1mindex ab12499..af33df3 100644[m
[1m--- a/src/Todo.js[m
[1m+++ b/src/Todo.js[m
[36m@@ -3,16 +3,53 @@[m [mclass Todo extends Component {[m
     constructor(props) {[m
         super(props);[m
         this.handleClick = this.handleClick.bind(this)[m
[32m+[m[32m        this.toggleForm = this.toggleForm.bind(this)[m
[32m+[m[32m        this.handleChange = this.handleChange.bind(this)[m
[32m+[m[32m        this.handleUpdate = this.handleUpdate.bind(this)[m
[32m+[m[32m        this.state = {[m
[32m+[m[32m            isEditing: false,[m
[32m+[m[32m            task: this.props.todo[m
[32m+[m[32m        }[m
[32m+[m[32m    }[m
[32m+[m[32m    toggleForm() {[m
[32m+[m[32m        this.setState({[m
[32m+[m[32m            isEditing: !this.state.isEditing[m
[32m+[m[32m        })[m
     }[m
[31m-[m
     handleClick() {[m
         this.props.RMtodo(this.props.id)[m
     }[m
[32m+[m[32m    handleUpdate(evt) {[m
[32m+[m[32m        evt.preventDefault();[m
[32m+[m[32m        this.props.UPtodo(this.props.id, this.state.task)[m
[32m+[m[32m        this.setState({[m
[32m+[m[32m            isEditing: false[m
[32m+[m[32m        })[m
[32m+[m
[32m+[m[32m    }[m
[32m+[m[32m    handleChange(evt) {[m
[32m+[m[32m        this.setState([m
[32m+[m[32m            { [evt.target.name]: evt.target.value })[m
[32m+[m
[32m+[m[32m    }[m
     render() {[m
[31m-        return <div>[m
[31m-            <span>{this.props.todo}[m
[31m-                <button onClick={this.handleClick}>x</button></span>[m
[31m-        </div>[m
[32m+[m[32m        let result;[m
[32m+[m[32m        if (this.state.isEditing) {[m
[32m+[m[32m            result =[m
[32m+[m[32m                (<form onSubmit={this.handleUpdate}>[m
[32m+[m[32m                    <input type="text" value={this.state.task} name="task" onChange={this.handleChange} />[m
[32m+[m[32m                    <button>Save</button>[m
[32m+[m[32m                </form>)[m
[32m+[m
[32m+[m[32m        } else {[m
[32m+[m[32m            result = <div>[m
[32m+[m
[32m+[m[32m                <span>{this.props.todo}</span>[m
[32m+[m[32m                <button onClick={this.toggleForm}>Edit</button>[m
[32m+[m[32m                <button onClick={this.handleClick}>x</button>[m
[32m+[m[32m            </div>[m
[32m+[m[32m        }[m
[32m+[m[32m        return result;[m
     }[m
 }[m
 [m
[1mdiff --git a/src/TodoList.js b/src/TodoList.js[m
[1mindex 339154f..69e373a 100644[m
[1m--- a/src/TodoList.js[m
[1m+++ b/src/TodoList.js[m
[36m@@ -9,6 +9,7 @@[m [mclass TodoList extends Component {[m
         }[m
         this.create = this.create.bind(this);[m
         this.remove = this.remove.bind(this);[m
[32m+[m[32m        this.update = this.update.bind(this);[m
     }[m
     create(newTodo) {[m
         this.setState({[m
[36m@@ -20,9 +21,22 @@[m [mclass TodoList extends Component {[m
             Todo: this.state.Todo.filter(td => (td.id != id))[m
         })[m
     }[m
[32m+[m[32m    update(id, updatedName) {[m
[32m+[m[32m        const updatedTodo = this.state.Todo.map(td => {[m
[32m+[m[32m            if (td.id === id) {[m
[32m+[m[32m                return { ...td, name: updatedName }[m
[32m+[m[32m            }[m
[32m+[m[32m            return td;[m
[32m+[m[32m        })[m
[32m+[m[32m        this.setState({[m
[32m+[m[32m            Todo: updatedTodo[m
[32m+[m[32m        })[m
[32m+[m
[32m+[m[32m    }[m
     render() {[m
[31m-        const Todolist = this.state.Todo.map(td => (<Todo RMtodo={this.remove} key={td.id} todo={td.name} id={td.id} />))[m
[32m+[m[32m        const Todolist = this.state.Todo.map(td => (<Todo UPtodo={this.update} RMtodo={this.remove} key={td.id} todo={td.name} id={td.id} />))[m
         return <div>[m
[32m+[m[32m            <h1>Todo List</h1>[m
             <NewTodoForm addTodo={this.create} />[m
             {Todolist}[m
         </div>[m
