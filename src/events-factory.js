
export default {
    fromClickup: entry => {

        if(!entry.task) return false

        const editable = true;  // ['Closed', 'archived'].indexOf(entry.task.status.status) === -1
	let taskLocation = `${entry.task_location.space_name}`;
        if (entry.task_location.folder_name.indexOf("hidden") === -1) {
            taskLocation += ` - ${entry.task_location.folder_name}`
	}
	if (entry.task_location.list_name) {
            taskLocation += ` - ${entry.task_location.list_name}`
	}

	let taskLocationShort = /KR-\w\w-\d\d/i.exec(taskLocation);
	if (taskLocationShort != null) {
            taskLocationShort = taskLocationShort[0];
	} else {
            taskLocationShort = entry.task_location.space_name;
	}


        return {
            entryId: entry.id,
            taskId: entry.task.id,
            title: entry.task.name,
            taskUrl: entry.task_url,
            description: entry.description,
            taskLocation: taskLocation,
            taskLocationShort: taskLocationShort,
            start: new Date(Number(entry.start)),
            end: new Date(Number(entry.start) + Number(entry.duration)),
            raw_duration: Number(entry.duration),

            // Only make draggable/resizable/editable if task is not closed or archived
            draggable: editable,
            resizable: editable,
            deletable: editable,
            class: !editable ? 'not-editable' : null
        }
    },

    updateFromRemote: (original, remote) => {
        console.dir(original)
        console.dir(remote)
        return Object.assign(original, {
            entryId: remote.id,
            taskId: remote.task.id,
            taskUrl: `https://app.clickup.com/t/${remote.task.id}`,
            title: remote.task.name,
            start: new Date(Number(remote.start)),
            end: new Date(Number(remote.start) + Number(remote.duration)),
            raw_duration: Number(remote.duration)
        })
    }
}
