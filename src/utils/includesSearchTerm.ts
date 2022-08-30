import { ITaskWithId } from "../types"

export default function includesSearchTerm(task : ITaskWithId, searchTerm : string): boolean {
    const bodyIncludesSearchTerm = task.body && task.body.includes(searchTerm)
    const titleIncludesSearchTerm = task.title.includes(searchTerm)
    return  bodyIncludesSearchTerm || titleIncludesSearchTerm
  }