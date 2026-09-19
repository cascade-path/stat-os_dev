## 2026-09-19

### Project

- stat.os is a life state management app.
- Tasks use a nested JSON tree based on purpose and means.
- Goals, assets, and daily tasks will be connected in future iterations.

### Current scope

- Keep the first implementation minimal.
- Display the task JSON in the browser.
- Render task titles as nested div elements.
- Add editing and JSON export later.

### Data

- Use browser data storage first.
- Compare localStorage and IndexedDB later.
- Use Google Drive for logged-in users in the future.
- Keep the current dummy JSON structure for now.
- Add randomized ids, descriptions, and timestamps later.

### Project structure

- Keep components under src/components.
- Keep styles under src/styles.
- Keep JSON data under src/data when the data grows.
- Use SCSS when useful. The sass package has been installed.

### Naming

- Components: PascalCase.
- Functions and variables: camelCase.
- CSS classes: kebab-case.
- JSON fields: camelCase.

### Git

- Keep main clean for future automatic deployment.
- Use feature branches for implementation work.
- Keep documentation changes separate when appropriate.

### Current implementation

- App.jsx imports the global SCSS file.
- App.jsx calls stateTasks and receives the current task tree.
- App.jsx passes the task tree to Tree.
- stateTasks.js owns the React state.
- stateTasks.js initializes state from dummy.json.
- stateTasks.js returns tasks and setTasks.
- Tree.jsx receives one task through props.
- Tree.jsx displays the task title.
- Tree.jsx recursively renders every child task.
- Each child component uses child.id as its React key.

### Data flow

```text
dummy.json
	-> stateTasks.js
	-> App.jsx
	-> Tree.jsx
	-> browser UI
```

### Future migration

- Keep data loading inside stateTasks.js.
- Replace the dummy.json initializer with browser data loading later.
- Keep App.jsx focused on application composition.
- Keep Tree.jsx focused on task tree rendering.
- Add task editing by calling setTasks with a new tree.
- Validate data before saving it to browser storage.
- Do not save when data loading fails.

### Today summary

- Source data: dummy.json.
- React data: useState in stateTasks.js.
- UI rendering: Tree receives the task data through props.

```text
dummy.json
	-> useState
	-> Tree(task)
	-> browser UI
```

- The basic data flow from source JSON to React state to rendered UI is working.
- Task editing is the next implementation step.
